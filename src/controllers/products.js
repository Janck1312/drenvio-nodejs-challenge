"use strict";

const ProductService = require("../services/product.service"); 
const { Router } = require("express");

class ProductsController {
    _ProductService = new ProductService();
    _router = Router();
    _path = "/products"
    
    constructor(){}

    getRoutes() 
    {
        this._router.get(this._path, async (req, res) => {
            return res.json(await this._ProductService.findAll());
        });
        return this._router;
    }
}

module.exports = ProductsController;