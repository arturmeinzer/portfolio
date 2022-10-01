require("dotenv").config();
const mongoose = require("mongoose");
const fakeDB = require("./fakeDB");

mongoose.connect(process.env.DB_URI, async () => {
    // eslint-disable-next-line no-console
    console.log("Start populating db");
    await fakeDB.populate();
    await mongoose.connection.close();
    // eslint-disable-next-line no-console
    console.log("Finished populating db");
});
