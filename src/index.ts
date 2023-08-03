
import express, { Request, Response } from "express"
import config from "./config"
const app = express()


if(process.env.NODE_ENV==='production'){
    app.use('/', express.static('client/dist'));
};
app.get('/test', (req: Request, res: Response) => {
    res.send('ok').end();
})


app.listen(config.PORT, () => console.log(`Application is running on ${config.HOST}`));