const { Router } = require("express");

const main_router = Router();

/**
 * @requires appcontrollers registered here
*/
const ProductsController = require("./products");
const PriceController = require("./price");

/**
 * @requires push AppRoutes here
*/
const app_routes = [
    new ProductsController().getRoutes(),
    new PriceController().getRoutes()
];
main_router.use(app_routes);

module.exports = main_router;