import { Request, Response } from "express";

export default class KafkaController {
    public constructor(){
        console.log('hi');
        
    }
    public getTopics(req: Request, res: Response): Response<any, Record<string, any>> {
        return res.send('kafka topics')
    }
}