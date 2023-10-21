"use strict";

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const _MongoConnection = require("./config/Mongo");
const approutes = require("./controllers/index");
const _mongoConnection = new _MongoConnection();

_mongoConnection.connect().then(() => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api/v1/node-js-test", approutes);
    app.listen(process.env.PORT || 3000);
    console.log("API escuchando el puerto " + process.env.PORT);
});