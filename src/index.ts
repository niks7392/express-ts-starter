import express, { Application } from 'express';
const app: Application = express();



app.on('ready', ()=>{
    app.listen('', (): void => {
        console.log(`Congrats your typescript application running on http://${config.host}:${config.port}`);
    })
})