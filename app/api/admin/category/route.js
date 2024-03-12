import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
    return NextResponse.json({"hello": "world"}, { status: 200 });
}
 
// export async function HEAD(request) {}
 
export async function POST(request) {
    const data = await request.json();
    console.log(data)
    return NextResponse.json({"hello": "world"}, { status: 200 });
}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request) {}