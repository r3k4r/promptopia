'use server'


import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { ResultCode } from "@/app/lib/action"; 


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
export async function signUp(prevstate, formData){

    try{    
       const password= formData.get("password")
       const name = formData.get("name")
       const email = formData.get("email")

       const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if(existingUser){
        return{
            type:'error',
            resultCode: 
        }
    }

       const hashedPassword =await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: hashedPassword
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

    redirect('/auth/login')

}



 
