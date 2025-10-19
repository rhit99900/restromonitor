import { useEffect, useMemo, useState } from 'react';
import { API_BASE_URL } from '../config';
import type { AvailabilityRecord, Restaurant, RestaurantListingsProps, RestaurantResponse } from '../types/common';

const getLatestAvailability = (records: AvailabilityRecord[] | undefined) => {
  if (!records || records.length === 0) {
    return null;
  }
  return records.reduce<AvailabilityRecord | null>((latest, current) => {
    if (!latest) return current;
    return new Date(current.updated_at).getTime() > new Date(latest.updated_at).getTime()
      ? current
      : latest;
  }, null);
};

const RestaurantListings = ({ restaurantId }: RestaurantListingsProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (restaurantId === null) {
      setRestaurant(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const loadRestaurant = async () => {
      setIsLoading(true);
      setError(null);
      setRestaurant(null);

      try {
        const response = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload: RestaurantResponse = await response.json();
        if (!payload.success) {
          throw new Error(payload.message ?? 'Unable to load restaurant');
        }

        setRestaurant(payload.data);
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return;
        }
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    void loadRestaurant();

    return () => controller.abort();
  }, [restaurantId]);

  const latestStatuses = useMemo(() => {
    if (!restaurant) return new Map<number, AvailabilityRecord | null>();
    return new Map(
      restaurant.listings.map((listing) => [
        listing.id,
        getLatestAvailability(listing.platform_availability),
      ]),
    );
  }, [restaurant]);

  if (restaurantId === null) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Restaurant Listings
        </h2>
        <p className="text-sm text-slate-500">
          Select a restaurant to view its platform coverage and availability.
        </p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Restaurant Listings
        </h2>
        <p className="text-sm text-slate-500">Loading restaurant data…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Restaurant Listings
        </h2>
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      </section>
    );
  }

  if (!restaurant) {
    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Restaurant Listings
        </h2>
        <p className="text-sm text-slate-500">
          Restaurant not found. Try another identifier.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-semibold text-slate-900">
          {restaurant.name}
        </h2>
        <p className="text-sm text-slate-500">
          {restaurant.brand} • {restaurant.city} • {restaurant.address}
        </p>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Expected hours {restaurant.expected_open_time} –{' '}
          {restaurant.expected_close_time}
        </p>
      </header>

      {restaurant.listings.length === 0 ? (
        <p className="text-sm text-slate-500">
          No platform listings recorded for this restaurant.
        </p>
      ) : (
        <ul className="space-y-4">
          {restaurant.listings.map((listing) => {
            const latest = latestStatuses.get(listing.id);
            const statusLabel = latest ? 
              latest.is_available ? 'available' : 'offline'
              : 'unknown';

            const statusStyles =
              statusLabel === 'available'
                ? (
                  (!latest?.is_status_true) ? 
                    'bg-green-100 text-green-700':
                    'bg-red-100 text-red-700'
                )
                : statusLabel === 'offline'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-slate-100 text-slate-600';

            return (
              <li
                key={listing.id}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {listing.platform?.name ?? `Platform #${listing.platform?.id}`}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {listing.platform?.platform_uri ? (
                        <a target="_blank" href={listing.platform?.platform_uri}>{listing.platform?.platform_uri}</a>
                      ): null}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${statusStyles}`}
                  >
                    {statusLabel}
                  </span>                  
                </div>

                {latest && (
                  <dl className="mt-3 grid gap-3 text-xs text-slate-600 md:grid-cols-3">
                    <div>
                      <dt className="font-medium text-slate-500">Last check</dt>
                      <dd>
                        {new Date(latest.updated_at).toLocaleString(undefined, {
                          hour: '2-digit',
                          minute: '2-digit',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-slate-500">Created</dt>
                      <dd>
                        {new Date(latest.created_at).toLocaleString(undefined, {
                          hour: '2-digit',
                          minute: '2-digit',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-slate-500">Listing URI</dt>
                      <dd className="truncate"><a target="_blank" href={listing.restaurant_platform_uri}>{listing.restaurant_platform_uri}</a></dd>
                    </div>
                  </dl>
                )}

                {!latest && (
                  <p className="mt-3 text-xs text-slate-500">
                    No availability checks recorded for this listing yet.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default RestaurantListings;
