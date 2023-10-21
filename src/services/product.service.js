"use strict";

const ProductEntitie = require("../entities/Product");
const UserEntitie = require("../entities/User");

class ProductService {
    productEntitie = ProductEntitie;
    userEntitie = UserEntitie;

    async findAll() 
    {
        try {
            return await this.productEntitie.find({ stock:!0 });    
        } catch (error) {
            return error.message;
        }
    }

    async findSpecialPriceByCustomerAndProduct(request) {
        try {
            let { userId, productName } = request.params;
            const product = await this.findProductByName(productName);
            const user = await this.userEntitie.findOne({ id: userId });
            if (!product?._id) throw new Error("product not found");
            if (!user?._id) throw new Error("user not found");
            let result = null;
            user.special_prices.forEach((special_price) => {
                if (special_price.product_name == product.product_name) {
                    result = special_price;
                }
            });
            delete product.stock;
            delete product._id;
            return !result ? product : result;  
        } catch (error) {
            return error.message;
        }

    }

    async findById(id) {
        try {
            return await this.productEntitie.findOne({ _id:id });
        } catch (error) {
            return error.message;
        }
    }

    async findProductByName(name) {
        try {
            return await this.productEntitie.findOne({ product_name:name });
            //({ product_name: name });
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ProductService;