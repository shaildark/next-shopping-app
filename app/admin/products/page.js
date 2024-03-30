"use client";

import { allProducts } from "@/server_functions/product";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);

    const dataColumns = [
        {
            name: "ID",
            selector: row => row.id,
        },
        {
            name: "Product Name",
            selector: row => row.vName,
        },
        {
            name: "Category Name",
            selector: row => row.Category.vName,
        },
    ];

    const addProductBtn = <Button><Link href={"/admin/products/add"}>Add Product</Link></Button>

    useEffect(() => {
        const getData = async () => {
            const tempProducts = await allProducts();
            console.log(tempProducts)
            setProducts(tempProducts);
        }
        getData();

    }, [])

    return (
        <>
            <DataTable
                title="Products"
                columns={dataColumns}
                data={products}
                actions={addProductBtn}
            />
        </>
    )
}