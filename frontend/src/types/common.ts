
export type Restaurant = {
  id: number;
  name: string;
  address: string;
  brand: string;
  city: string;
  expected_open_time: string;
  expected_close_time: string;
  listings: RestaurantListing[];
};

export type RestaurantsResponse =
  | {
      success: true;
      data: Restaurant[];
    }
  | {
      success: false;
      message?: string;
    };

export type AvailabilityRecord = {
  id: number;
  is_available: boolean;
  created_at: string;
  updated_at: string;
};

export type RestaurantListing = {
  id: number;
  platform_id: number;
  restaurant_platform_uri: string;
  platform?: {
    id: number;
    name: string;
    platform_uri: string;
  };
  platform_availability?: AvailabilityRecord[];
};

export type RestaurantResponse =
  | {
      success: true;
      data: Restaurant;
    }
  | {
      success: false;
      message?: string;
    };

export type RestaurantListingsProps = {
  restaurantId: number | null;
};