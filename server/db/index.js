import { config } from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import connectMongodbSession from "connect-mongodb-session";
import "./models/project.js";
import "./models/job.js";
import "./models/user.js";

config();
const MongoDBStore = connectMongodbSession(session);

export const connect = () => {
    mongoose.connect(process.env.DB_URI, () => {
        // eslint-disable-next-line no-console
        console.log("connected to db");
    });
};

export const initSessionStore = () => new MongoDBStore({
    uri: process.env.DB_URI,
    collection: "sessions",
}, () => {});
