import Prisma from "../database/prisma.js";

class Restaurants {

  public getRestaurants = async () => {
    return Prisma.restaurants.findMany({
      include: { listings: true }
    });
  }

}

const RestaurantService = new Restaurants();
export default RestaurantService;