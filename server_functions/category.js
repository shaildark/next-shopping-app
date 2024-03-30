"use server";

import Category from "@/models/category";
import Product from "@/models/product";

import { JsonConvert } from "./utils";
require("@/models/associations");
export async function addCategory(data) {
    try {
        const category = await Category.create({ "vName": data.name })
        const responseData = await JsonConvert(category);
        return responseData;
    }
    catch (error) {
        return false;
    }
}

export async function allCategories(filter = null) {
    try {
        const categories = await Category.findAll({
            include: Product
        });
        const responseData = await JsonConvert(categories);
        return responseData;
    }
    catch (error) {
        return [];
    }
}