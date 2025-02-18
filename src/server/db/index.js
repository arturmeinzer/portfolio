import { config } from "dotenv";
import mongoose from "mongoose";
import "./models/project.js";
import "./models/job.js";

config();

// eslint-disable-next-line import/prefer-default-export
export const connect = async () => {
    await mongoose.connect(process.env.DB_URI);
    // eslint-disable-next-line no-console
    console.info("connected to db");
};
