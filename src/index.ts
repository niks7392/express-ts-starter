import express, { Application } from 'express';
import { config } from 'dotenv'
config();
const port: number | any = process.env.PORT || 1337;
const app: Application = express();



app.listen(port, ():void =>{
    console.log(`Congrats your typescript application running on http://localhost:${port}`);
})