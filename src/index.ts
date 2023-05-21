import express, { Application } from 'express';
import config from './config';
import middlewares from './middlewares';
import database from './database';
import Socket from './websocket';
const app: Application = express();

// database connectgion 
database(app);

// application middlewares
app.use(middlewares);

let ws = new Socket(config.marketDataFeedWsUrl, config.bearerAccessToken)
ws.run()
ws.ws?.on('open',(e:any)=>{
    console.log('connected');
    
})



app.on('ready', ()=>{
    app.listen(config.port, (): void => {
        console.log(`Congrats your typescript application running on http://${config.host}:${config.port}`);
    })
})