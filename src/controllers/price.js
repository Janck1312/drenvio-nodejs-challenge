"use strict";

const ProductService = require("../services/product.service");
const { Router } = require("express");

class PriceController {
    _ProductService = new ProductService();
    _router = Router();
    _path = "/price"

    constructor() { }

    getRoutes() {
        this._router.get(`${this._path}/:userId/:productName`, async (req, res) => {
            return res.json(await this._ProductService.findSpecialPriceByCustomerAndProduct(req));
        });
        return this._router;
    }
}

module.exports = PriceController;