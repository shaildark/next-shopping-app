"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState, useEffect } from "react"
import { allCategories } from "@/server_functions/category"
import { addProduct } from "@/server_functions/product"

export default function ProductsAddPage() {
    const { toast } = useToast()
    const [prodName, setProdName] = useState("");
    const [category, setCategory] = useState("");
    const [prodimage, setProdimage] = useState(null);
    const [errorProduct, setProductError] = useState(false);
    const [errorCategory, setCategoryError] = useState(false);

    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let tempData = await allCategories();
            setCategoryOptions(tempData);
        }

        getData();
    }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        setProductError((prodName === "") ? true : false);
        setCategoryError((category === "") ? true : false);
        const fd = new FormData();
        fd.append("name", prodName);
        fd.append("category", category);
        fd.append("image", prodimage);
        const result = await addProduct(fd);
        if (result) {
            toast({
                title: "Product",
                description: "Product added successfully",
            });
        }
    }

    return (
        <>
            <form action="" method="POST" onSubmit={submitHandler}>
                <div className="flex justify-center">
                    <Card className="w-1/2 content-center">
                        <CardHeader>
                            <CardTitle>Add Product</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Product Name" onChange={(e) => setProdName(e.target.value)} value={prodName} className={`${errorProduct ? "outline outline-offset-2 outline-red-500" : ""}`} />
                                {
                                    errorProduct && <p className="text-red-500">Product name is required</p>
                                }
                            </div>

                            <br></br>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="category">Category</Label>
                                <Select name="category" onValueChange={(e) => setCategory(e)} className={`${errorCategory ? "outline outline-offset-2 outline-red-500" : ""}`}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            categoryOptions.map((category) => (
                                                <SelectItem key={category.id} value={String(category.id)}> {category.vName}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                    {
                                        errorCategory && <p className="text-red-500">Category name is required</p>
                                    }
                                </Select>
                            </div>

                            <br></br>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="prodimage">Image</Label>
                                <Input type="file" name="prodimage" id="prodimage" onChange={(e) => setProdimage(e.target.files[0])} />
                            </div>

                            <br></br>

                            <div className=" max-w-sm items-center gap-1.5">
                                <Button type="submit">Add Product</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </>
    )
}