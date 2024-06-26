"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { addCategory } from "@/server_functions/category";

export default function CategoriesAddPage() {
    const { toast } = useToast()
    const [catName, setCatName] = useState("");
    const [error, setError] = useState(false);
    const submitHandler = async (e) => {
        e.preventDefault();
        setError((catName === "") ? true : false);

        const result = await addCategory({ name: catName });
        if (result) {
            toast({
                title: "Category",
                description: "Category added successfully",
            });
        }
    }

    return (
        <>
            <form action="" method="POST" onSubmit={submitHandler}>
                <div className="flex justify-center">
                    <Card className="w-1/2 content-center">
                        <CardHeader>
                            <CardTitle>Add Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Category Name" onChange={(e) => setCatName(e.target.value)} value={catName} className={`${error ? "outline outline-offset-2 outline-red-500" : ""}`} />
                                {
                                    error && <p className="text-red-500">Category name is required</p>
                                }
                            </div>
                            <br></br>
                            <div className=" max-w-sm items-center gap-1.5">
                                <Button type="submit">Add Category</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </form>
        </>
    )
}