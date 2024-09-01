'use server'


import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { ResultCode } from "@/app/lib/errors"; 


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
            resultCode: ResultCode.UserAlreadyExists, 
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
            return {
                type: 'success',
                resultCode: ResultCode.UserCreated,
            };
        }else {
            return {
                type: 'error',
                resultCode: ResultCode.UnknownError,
            };
        }
        
    }catch (err) {
        console.error(err);
        return {
            type: 'error',
            resultCode: ResultCode.UnknownError,
        };
    }finally{
        redirect('/auth/login')
    }  

}



 
