import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import RestaurantService from './services/restaurants.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: "Restromonitor is up and running"
  })
})

app.get('/restaurants', async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantService.getRestaurants();
    res.status(200).send({
      data: restaurants,
      success: true
    })
  } catch(e) {
    res.status(500).send({
      success: false,
      message: "Something must be wrong!"
    })
  }
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running at PORT ${PORT}`);
})

