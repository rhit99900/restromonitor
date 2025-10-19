import { platform } from "os";
import type { Platforms, Restaurants } from "../types/common.js";
import Prisma from './prisma.js'
import { platforms, restaurants } from "../utils.js";


async function createOrUpdateRestaurant(data: Restaurants) {
  const restaurant = await getRestaurant(data);

  if(!restaurant) {
    delete data.platforms;
    await Prisma.restaurants.create({
      data: data
    });
    console.log(`Restaurant ${data.name} created`);
  } else {
    console.log(`Restaurant ${data.name} exists`);
  }
}

async function getRestaurant(data: Restaurants) {
  const restaurant = await Prisma.restaurants.findUnique({
    where: {
      name: data.name
    }
  });
  return restaurant
}

async function getPlatform(name: string) {
  const platform = await Prisma.platform.findUnique({
    where: {
      name: name
    }
  });
  return platform;
}

async function createOrUpdatePlatforms(data: Platforms) {
  const platform = await getPlatform(data.name);

  if(!platform) {    
    await Prisma.platform.create({
      data: data
    });
    console.log(`Platform ${data.name} created`);
  } else {
    console.log(`Platform ${data.name} exists`);
  }
}

async function createOrUpdateRestaurantPlatforms(data: Restaurants) {
  const restaurant = await getRestaurant(data);
  if(restaurant && data.platforms) {
    for(const p of data.platforms) {
      const platform = await getPlatform(p?.name);
      if(platform) {
        try {
          await Prisma.restaurantPlatform.create({
            data: {
              restaurant_id: restaurant?.id,
              platform_id: platform?.id,
              restaurant_platform_uri: p.restaurant_platform_uri
            }
          })
          console.log(`Created lookup for restaurant ${restaurant.name} & platform ${platform.name}`);
        } catch(e: any) {
          console.error(`Failed to create lookup for restaurant ${restaurant.name} & platform ${platform.name}`, e?.message);
        }
      } else {
        console.warn(`No platform ${p.name} found`);
      }
    }
  }
}

for(const restaurant of restaurants) {
  try {
    await createOrUpdateRestaurant(restaurant);
    await createOrUpdateRestaurantPlatforms(restaurant);
  } catch(e: any) {
    console.error(`Failed to create restaurant: ${restaurant.name}`, e?.message);
  }
}

for(const platform of platforms) {
  try {
    await createOrUpdatePlatforms(platform)
  } catch(e: any) {
    console.error(`Failed to create platform: ${platform.name}`, e?.message);
  }
}