require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

require("./models/project");
require("./models/job");
require("./models/user");

exports.connect = () => {
    mongoose.connect(process.env.DB_URI, () => {
        // eslint-disable-next-line no-console
        console.log("connected to db");
    });
};

exports.initSessionStore = () => new MongoDBStore({
    uri: process.env.DB_URI,
    collection: "sessions",
}, () => {});
