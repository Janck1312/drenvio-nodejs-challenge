"use strict";

const mongoose = require("mongoose");

class MongoConnection {
    _mongoose = mongoose;
    constructor() {}

    async connect() {
        this.config();
        let DB_URI = process.env.DB_URI;
        DB_URI = DB_URI.replace("<password>", process.env.DB_PASSWORD);
        this._mongoose.connect(DB_URI, { dbName: `${process.env.DB_NAME}` }).then(() => {
            console.log("mongo is online");
        }).catch((err) => console.log("mongo connect err: ", err.message));
    }
    
    config() {
        return this._mongoose.set('strictQuery', true)
    }
}

module.exports = MongoConnection;