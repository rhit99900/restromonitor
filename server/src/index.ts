import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: "Restromonitor is up and running"
  })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is up and running at PORT ${PORT}`);
})