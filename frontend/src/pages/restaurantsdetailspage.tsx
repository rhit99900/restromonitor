import { Link, useParams } from "react-router";
import RestaurantListings from "../components/restaurant-listings";
import AppLayout from "./layout";

const RestaurantDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = id ? Number(id) : null;
  const isInvalidId = id !== undefined && (parsedId === null || Number.isNaN(parsedId));

  return (
    <AppLayout>
      <nav>
        <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-500">
          ← Back to restaurants
        </Link>
      </nav>
      {isInvalidId ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
          Enter a valid numeric restaurant identifier to view listings.
        </div>
      ) : (
        <RestaurantListings restaurantId={parsedId} />
      )}
    </AppLayout>
  );
};

export default RestaurantDetailPage;