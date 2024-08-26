const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_DB_URL = process.env.MONGO_DB;
const connectDb = () => {
    mongoose.connect(`${MONGO_DB_URL}`, {
        dbName: "SeoBackend",
    }).then(() => {
        console.log(`Database Connected Successfully With Host ${mongoose.connection.host}`);
    }).catch(error => {
        console.error("Error connecting to database:", error);
    });
}

module.exports = connectDb;



