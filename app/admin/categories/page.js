"use client";
import { allCategories } from "@/server_functions/category";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function CategoriesPage() {

    const [categories, setCategories] = useState([]);

    const dataColumns = [
        {
            name: "ID",
            selector: row => row.id,
        },
        {
            name: "Category Name",
            selector: row => row.vName,
        },
    ];

    const addCategoryBtn = <Button><Link href={"/admin/categories/add"}>Add Category</Link></Button>

    useEffect(() => {
        const getData = async () => {
            const tempCat = await allCategories();
            console.log(tempCat)
            setCategories(tempCat);
        }
        getData();

    }, [])

    return (
        <>
            <DataTable
                title="Categories"
                columns={dataColumns}
                data={categories}
                actions={addCategoryBtn}
            />
        </>
    )
}