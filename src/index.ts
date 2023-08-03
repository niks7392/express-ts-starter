
import express, { Request, Response } from "express"
import config from "./config"
import serveStatic from "serve-static";
const app = express()



const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/client/dist`
    : `${process.cwd()}/client/`;
// app.get('/test', (req: Request, res: Response) => {
//     res.send('ok').end();
// })
console.log(STATIC_PATH);

app.use(serveStatic(STATIC_PATH, { index: false }));
app.listen(config.PORT, () => console.log(`Application is running on ${config.HOST}`));