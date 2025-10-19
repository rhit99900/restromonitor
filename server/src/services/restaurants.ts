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
      include: { listings: true },      
    });
  }

  public getRestaurantAvailability = async(id: number) => {
    const restaurant = await this.getRestaurant(id);
    return restaurant;
  }
}

const RestaurantService = new Restaurants();
export default RestaurantService;