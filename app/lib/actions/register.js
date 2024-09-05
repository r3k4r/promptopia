
'use server'

import bcrypt from 'bcryptjs'
import { prisma } from '../db';
import { ResultCode } from "@/app/lib/errors"; 
import { generateVerificationToken } from './tokens';

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
    if(validateEmail(email) && validatePassword(password)){

       const hashedPassword =await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: hashedPassword
            }
        })

        if(user){
            //send verification code to email
            const verificationToken = await generateVerificationToken(email)
        
            return {
                type: 'success',
                resultCode: ResultCode.Verification,
            };
            
           
        }else {
            return {
                type: 'error',
                resultCode: ResultCode.UnknownError,
            };
        }
    }else if(!validateEmail(password)){
        return {
            type: 'error',
            resultCode: ResultCode.InvalidPassword,
        };
    }

        
    }catch (err) {
        console.error(err);
        return {
            type: 'error',
            resultCode: ResultCode.UnknownError,
        };
    }
    // finally{
    //     redirect('/auth/login')
    // }  

}



 

function validateEmail(email) {
    // Email validation logic here
    // You can use a regular expression or any other method to validate the email format
    // Example regular expression for email validation:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    // Password validation logic here
    // You can use a regular expression or any other method to validate the password format
    // Example regular expression for password validation:
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  } 