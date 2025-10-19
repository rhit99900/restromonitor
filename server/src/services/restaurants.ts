import Prisma from "../database/prisma.js";

class Restaurants {

  public getRestaurants = async () => {
    return Prisma.restaurants.findMany({
      include: { listings: true }
    });
  }
  
  public getRestaurant = async (id: number) => {
    return Prisma.restaurants.findUnique({
      where: {
        id: id
      }, 
      include: { listings: {
        include: {
          platform: {
            select: {
              name: true,
              platform_uri: true
            }
          },
          platform_availability: {
            select: {
              is_available: true,
              created_at: true,
              updated_at: true
            }
          }
        }
      } },
    });
  }
}

const RestaurantService = new Restaurants();
export default RestaurantService;