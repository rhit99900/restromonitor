export type Restaurants = {
  name: string;
  address: string;
  city: string;    
  brand: string;
  expected_open_time: string;
  expected_close_time: string;
  platforms?: RestaurantPlaform[]
}

export type RestaurantPlaform = {
  name: string;
  restaurant_platform_uri: string;
  api_path?: string;
}

export type Platforms = {
  name: string;
  platform_uri: string;  
}