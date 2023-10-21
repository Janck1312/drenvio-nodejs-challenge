"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema(
    {
        name: { type: String, required: true },
        id:{ type:Number, required:true },
        //lastName:{ type:String, required:true },
        //email: { type: String, required: true, unique:true },
        special_prices: { type: Array, required: false }
    }/*,
    {
        versionKey: false,
        timestamps: true,
    }*/
);

module.exports = mongoose.model("users", UserSchema);