import {users } from "@/app/lib/util/db"
import { NextResponse } from "next/server";
import fs from 'fs';
export async function GET(){
    const data = users;
    return NextResponse.json({data } ,{status:200});
}
export async function POST(req: Request) {
    const { id, name, email, password } = await req.json();
  
    if (!id || !name || !email || !password) {
      return NextResponse.json({ title: "Required fields are missing" }, { status: 400 });
    } else {
      users.push({ id, name, email, password });
      const updatedUserArray = users;
      const updatedUser = JSON.stringify(updatedUserArray , null, 2);
      fs.writeFileSync('./app/lib/util//db.ts',`export const users = ${updatedUser}`,'utf8')
      return NextResponse.json({ title: "User created successfully" }, { status: 201 });
       
    }
   
  }
  export async function PUT(req: Request){
    const { id, name, email, password } = await req.json();
    const user = users.findIndex((user) => user.id === id);

    if (user === -1) {
        return NextResponse.json({title : "user not Found"})
    }
    else{
        users[user] ={ id ,name , email , password}
        const updatedUsersArray = users ;
        const updatedUser = JSON.stringify(updatedUsersArray , null ,2)
        fs.writeFileSync('./app/lib/util/db.ts',`export const users=${updatedUser}`) 
        return NextResponse.json({title : "User Successfully Updated"})
    }
  }
  
