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
import { useState } from "react"

export default function ProductsAddPage() {
    const [prodName, setProdName] = useState("");
    const [category, setCategory] = useState("");
    const [errorProduct, setProductError] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(category)
        setProductError((prodName === "") ? true : false);

        // Handle Form Submission

    }

    const categoryOptions = [
        { "id": 1, "name": "Home" },
        { "id": 2, "name": "Computer" },
        { "id": 3, "name": "Office" },
        { "id": 4, "name": "Car" }
    ];

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

                            <Label htmlFor="category">Category</Label>
                            <Select name="category" onValueChange={(e) => setCategory(e)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        categoryOptions.map((category) => (
                                            <SelectItem key={category.id} value={String(category.id)}> {category.name}</SelectItem>
                                        ))
                                    }
                                    {/* <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem> */}
                                </SelectContent>
                            </Select>

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