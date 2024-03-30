"use server";

import { fileUpload, JsonConvert } from "./utils";
import Product from "@/models/product";

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
            const fileUploadResult = await fileUpload(uploadedFile, path.join("public", "images", "products"), "NewName");
            if (fileUploadResult) {
                await product.update({ image: fileUploadResult })
            }
        }

        return await JsonConvert(product);
    } catch (error) {
        return false;
    }
}