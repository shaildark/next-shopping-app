import { NextResponse, NextRequest } from "next/server";

const category = require('@/models/category')

export async function GET(request) {
    return NextResponse.json({"hello": "world"}, { status: 200 });
}
 
// export async function HEAD(request) {}
 
export async function POST(request) {
    try {
      const allCategory = await category.findAll({
        attributes:["id", "vName"]
      });
      return NextResponse.json({ message: "Categories retrieved successfully", category:allCategory }, { status: 200 });
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
    }
  }
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request) {}