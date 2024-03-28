"use server";

import Category from "@/models/category";
import { JsonConvert } from "./utils";


export async function addCategory(data) {
    const category = await Category.create({ "vName": data.name })
    const responseData = await JsonConvert(category);
    return responseData;
}

export async function allCategories(filter = null) {
    const categories = await Category.findAll();
    const responseData = await JsonConvert(categories);
    return responseData;
}