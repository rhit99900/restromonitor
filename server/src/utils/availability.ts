import type { Restaurants, SyncResponse } from "../types/common.js";
import { restaurants } from "./helpers.js";
import fs, { stat } from 'fs';
import { fileURLToPath } from "url"; 
import path from "path";
import Prisma from "../database/prisma.js";
import RestaurantService from "../services/restaurants.js";

class FetchAvailabilitySwiggy {
  private restaurant;
  private platform_id:number = 1;

  constructor(restaurant: Restaurants) {
    this.restaurant = restaurant;
  }

  private fetchData = async (url: string) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);    
    const content: any = await fs.readFileSync(path.join(__dirname, url), 'utf-8');
    return JSON.parse(content);
  }

  private isAvailable = ():boolean => {
    const start = this.restaurant.expected_open_time.split(":");
    const end = this.restaurant.expected_close_time.split(":");
    const start_time = new Date();    
    const end_time = new Date(); 
    // Computing start time for the day based on restaurants' open and closed hours.
    start_time.setHours(Number(start[0]),Number(start[1]));
    end_time.setHours(Number(end[0]),Number(end[1]));
    if(Date.now() >= start_time.getTime() && Date.now() <= end_time.getTime()) {
      return true;
    } else {
      return false;
    }
  }

  public fetchAvailability = async () => {
    if(this.restaurant.platforms) {
      for(const p of this.restaurant.platforms) {
        if(p.json_path) {
          const response = await this.fetchData(p.json_path as string);
          const data = response.data.cards.find((c:any) => c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant');
          if(data) {
            const status = data?.card?.card?.info?.availability;            
            const check = this.isAvailable();
            const result = await this.updateAvailability(check, status.opened as boolean);
            console.log(result);
            if(result) {
              console.info(`Update availability for restaurant ${this.restaurant.name} at ${Date.now()}`);
              return {                
                name: this.restaurant.name,
                updated_at: new Date(),
                success: true,
              }
            } else {
              console.info(`Failed to update availability for restaurant ${this.restaurant.name} at ${Date.now()}`);
              return {                
                name: this.restaurant.name,
                updated_at: new Date(),
                success: false,
                message: "Platform information not found"
              }
            }
          } else {
            console.warn(`Failed to fetch availability for restaurant ${this.restaurant.name} at ${Date.now()}`)
            return {              
              name: this.restaurant.name,
              updated_at: new Date(),
              success: false,
              message: "Error fetching availability"
            }
          }
        }
      }
    }
  }

  public updateAvailability = async (ideal:boolean, actual:boolean) => {
    const restaurant = await RestaurantService.getRestaurantByName(this.restaurant.name)
    const platform = restaurant?.listings.find(i => i.platform_id === this.platform_id);    
    if(platform) {
      await Prisma.platformRestaurantAvailability.upsert({
        where: {
          restaurant_platform_id: platform.id
        },
        update: {
          updated_at: new Date(),
          is_available: actual,
          is_status_true: ideal && actual
        },
        create: {
          is_available: actual,
          is_status_true: ideal && actual,
          updated_at: new Date(),
          restaurant_platform_id: platform.id
        }
      })      
      return true;
    } else {
      return false;
    }    
  }
}


async function syncAvailability() {
  const results = [];
  for(const restaurant of restaurants) {  
    const R = new FetchAvailabilitySwiggy(restaurant);
    const result = await R.fetchAvailability();
    results.push(result);
  }
  return results;
}

export default syncAvailability;
