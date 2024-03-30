"use server";

import { fileUpload, JsonConvert } from "./utils";
import Product from "@/models/product";
import Category from "@/models/category";

require("@/models/associations");

const path = require("path");

export async function addProduct(data) {
    try {

        const productData = {
            vName: await data.get("name"),
            iCategoryId: await data.get("category"),
        }

        const product = await Product.create(productData)

        const uploadedFile = await data.get("image");

        if (uploadedFile !== null) {
            const tempName = "prod_" + product.id + "_" + (new Date().getTime())
            const fileUploadResult = await fileUpload(uploadedFile, path.join("public", "images", "products"), tempName);
            if (fileUploadResult) {
                await product.update({ image: fileUploadResult })
            }
        }

        const responseData = await JsonConvert(product);
        return responseData;
    } catch (error) {
        return false;
    }
}

export async function allProducts(filter = null) {
    try {
        const products = await Product.findAll({
            include: Category
        });
        const responseData = await JsonConvert(products);
        return responseData;
    }
    catch (error) {
        return [];
    }
}