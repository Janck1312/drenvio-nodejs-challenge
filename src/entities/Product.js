"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema(
    {
        product_name:{ type:String, required:true },
        //brand:{ type: String, required:true },
        price:{ type:Number, required:true },
        stock:{ type:Number }
    }/*,
    {
        versionKey: false,
        timestamps: true,
    }*/
);
module.exports = mongoose.model("products", ProductSchema);