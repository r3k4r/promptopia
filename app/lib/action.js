'use server'


import { PrismaClient } from "@prisma/client";
import { db } from "./db";

const prisma = new PrismaClient();
export async function signIn(FormData){
    try{        
        const user = await prisma.user.findUnique({
            where: {
                email: FormData.email,
            },
        })
    }catch(err){
        console.log(err)
    }
}
export async function signUp(formData){
    console.log(formData)
    const data={
        name: formData.get('name'),
        email:formData.get('email'),
        password:formData.get('password'),
    }
    try{        
        const user = await prisma.user.create({
            data:{
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
        if(user){
            console.log("success")
        }else{
            console.log("failed")
        }
    }catch(err){
        console.log(err)
    }
}



 
