import express, { Application, Request, Response } from 'express';
import { config } from 'dotenv'
import KafkaController from './controllers/kafka-controller';
config();
const port: number | any = process.env.PORT || 1337;

class Server {
    private app: Application;
    private kafkaController: KafkaController;

    constructor() {
        this.app = express();
        this.kafkaController = new KafkaController();
        this.config();
        this.routes();
    }

    private config(): void {

    };

    private routes(): void {
        this.app.get('/', this.kafkaController.getTopics)
    }

    public start(): void {
        this.app.listen(port, () => {
            console.log(`Congrats your typescript application running on http://localhost:${port}`);
        })
    }
};


const server = new Server();
server.start();