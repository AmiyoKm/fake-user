import { NextResponse } from "next/server";
import { users } from "@/app/lib/util/db";
import fs from 'fs'
// GET user by ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = users.filter((user) => String(user.id) === id);

    if (data.length === 0) {
        return NextResponse.json({ title: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ data });
}

// POST - Check user credentials
export async function POST(req: Request, { params }: { params: { id: string } }) {
    const { id } = params; // Destructure id from params
    const { name, email, password } = await req.json(); // Get body data

    // Find the user by ID
    const user = users.find((user) => String(user.id) === id);

    if (!user) {
        // If the user is not found
        return NextResponse.json({ title: "User not found" }, { status: 404 });
    }
    // Check if the credentials match
    if (user.name === name && user.email === email && user.password === password) {
        return NextResponse.json({ title: "User already exists" }, { status: 409 });
    } else {
        return NextResponse.json({ title: "Wrong credentials" }, { status: 400 });
    }
 }
 export async function DELETE(req : Request, {params} : {params : {id : string}}){
    const {id} =params
    const userIndex = users.findIndex((user) => user.id===id)
    if(userIndex ===-1){
        return NextResponse.json({title : "User not Found"})
    }
    else{
        users.splice(userIndex,1)
        const updatedUsersArray = users;
        const updatedUser = JSON.stringify(updatedUsersArray,null,2)
        fs.writeFileSync('./app/lib/util/db.ts',`export const users=${updatedUser}`)
        return NextResponse.json({title : "User Deleted"})

    }
 }
 