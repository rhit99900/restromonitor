import type { Platforms, Restaurants } from "./types/common.js"

export const restaurants: Restaurants[]= [{
  name: "McDonald's - Orion Avenue Mall",
  address: "3rd Floor, Orion East Mall, Jaibharath Nagar, Sathya Nagar, Banaswadi, Bengaluru, Karnataka 560033",
  city: "Bengaluru",
  brand: "McDonalds",
  platforms: [
    {
      name: "Swiggy",
      restaurant_platform_uri: "https://www.swiggy.com/city/bangalore/mcdonalds-orion-east-mall-banaswadi-rest87870",
      api_path: "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0033745&lng=77.6271216&restaurantId=87870&catalog_qa=undefined&submitAction=ENTER"
    }
  ],
  expected_open_time: "11:00",
  expected_close_time: "23:00"
}, {
  name: "McDonald's - Manyata Tech Park",
  address: "Ground floor,MFAR Manyata Tech Park,phase IV Nagawara, Kasaba, Hobli, Bengaluru, Karnataka 560045", 
  city: "Bengaluru",
  brand: "McDonalds",
  platforms: [
    {
      name: "Swiggy",
      restaurant_platform_uri: "https://www.swiggy.com/city/bangalore/mcdonalds-manyata-embassy-business-park-nagawara-rest266027",
      api_path: 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0033745&lng=77.6271216&restaurantId=266027&catalog_qa=undefined&submitAction=ENTER'
    }
  ],
  expected_open_time: "11:00",
  expected_close_time: "23:00"
}, {
  name: "McDonald's - Kamanahalli Main Road",
  address: "4M, 511, Kammanahalli Main Rd, HRBR Layout 3rd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043", 
  city: "Bengaluru",
  brand: "McDonalds",
  platforms: [
    {
      name: "Swiggy",
      restaurant_platform_uri: "https://www.swiggy.com/city/bangalore/mcdonalds-hrbr-layout-kamanahalli-main-road-rest23693",
      api_path: 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0033745&lng=77.6271216&restaurantId=23693&catalog_qa=undefined&submitAction=ENTER'
    }
  ],
  expected_open_time: "11:00",
  expected_close_time: "23:00"
}, {
  name: "McDonald's - CMH Road Indiranagar",
  address: "No 539, Ground Floor, Ashwini Complex, Chinmaya Mission Hospital Rd, Stage 1, Indiranagar, Bengaluru, Karnataka 560038", 
  city: "Bengaluru",
  brand: "McDonalds",
  platforms: [
    {
      name: "Swiggy",
      restaurant_platform_uri: "https://www.swiggy.com/city/bangalore/mcdonalds-cmh-road-indiranagar-rest23681",
      api_path: 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0033745&lng=77.6271216&restaurantId=23681&catalog_qa=undefined&submitAction=ENTER'
    }
  ],
  expected_open_time: "11:00",
  expected_close_time: "23:00"
}, {
  name: "McDonald's - Brigade Road",
  address: "Ground Floor & 1st Floor, Brigade Rd, opposite Space Centre, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001", 
  city: "Bengaluru",
  brand: "McDonalds",
  platforms: [
    {
      name: "Swiggy",
      restaurant_platform_uri: "https://www.swiggy.com/city/bangalore/mcdonalds-brigade-road-ashok-nagar-rest87869",
      api_path: 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0033745&lng=77.6271216&restaurantId=87869&catalog_qa=undefined&submitAction=ENTER'
    }
  ],
  expected_open_time: "11:00",
  expected_close_time: "23:00"
}]

export const platforms: Platforms[] = [{
  name: 'Swiggy',
  platform_uri: "https://swiggy.com",  
}, {
  name: "Zomato",
  platform_uri: "https://zomato.com"
}]