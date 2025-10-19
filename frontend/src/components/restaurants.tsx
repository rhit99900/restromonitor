import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import type { Restaurant, RestaurantsResponse } from '../types/common';
import { useNavigate } from 'react-router';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    const loadRestaurants = async () => {
      try {
        setError(null);
        const response = await fetch(`${API_BASE_URL}/restaurants`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload: RestaurantsResponse = await response.json();

        if (!payload.success) {
          throw new Error(payload.message ?? 'Unable to load restaurants');
        }

        setRestaurants(payload.data);
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return;
        }
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    void loadRestaurants();
    return () => controller.abort();            
  }, []);

  if (isLoading) {
    return (      
      <p className="text-sm text-slate-500">Loading latest data…</p>      
    );
  }

  if (error) {
    return (
      <React.Fragment>
        {error}
      </React.Fragment>      
    );
  }  

  return (
   <React.Fragment>
      {restaurants.length === 0 ? (
        <p className="text-sm text-slate-500">
          No restaurants found yet. Set one up to see more.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {restaurants.map((restaurant) => (
            <li
              key={`restaurant-${restaurant.id}`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="space-y-2 cursor-pointer" onClick={() => navigate(`/restaurants/${restaurant.id}`)}>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {restaurant.brand} • {restaurant.city}
                  </p>
                </div>

                <p className="text-xs text-slate-600">{restaurant.address}</p>

                <dl className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-slate-500">
                      Expected hours
                    </dt>
                    <dd>
                      {restaurant.expected_open_time} –{' '}{restaurant.expected_close_time}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-slate-500">
                      Platforms tracked
                    </dt>
                    <dd>{restaurant.listings.length}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default RestaurantsList;
