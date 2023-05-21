import { Application } from "express";
import mongoose, { MongooseError } from "mongoose";
import config from "./config";

export default async (app: Application) => {
    try {
        await mongoose.connect(config.database_uri);
        app.emit('ready');
    } catch (e: any) {
        throw new Error('failed connection with db')
    }
};