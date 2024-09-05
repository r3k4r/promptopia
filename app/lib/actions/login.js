'use server'

import bcrypt from 'bcryptjs'
import { ResultCode } from "@/app/lib/errors"; 
import {signIn} from '@/auth' 
import { AuthError } from "next-auth";
import { prisma } from '../db';
import { generateVerificationToken } from './tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerficationEmail } from '../mail';

//for sign in
export async function login(prevstate, formData){

    const email = formData.get("email")
    const password = formData.get("password")

    const existingUser = await getUserByEmail(email)
    const MatchPassword = await bcrypt.compare(password, existingUser.password)

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {
            type:'error',
            resultCode: ResultCode.InvalidCredentials,
        }
    }
    if(existingUser && MatchPassword && !existingUser.emailVerified){
        //send verification code to email
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerficationEmail(verificationToken.email, verificationToken.token)

        return {
            type: 'verification',
            resultCode: ResultCode.Verification,
        }
    } 

   try{
   
     await signIn("credentials", 
        {
            email,
            password,
            redirectTo : "/",
        }
     )
   }catch(err){
       if(err instanceof AuthError){
        switch(err.type){
            case "CredentialsSignin" : 
            return {
                type:'error',
                resultCode: ResultCode.InvalidCredentials,
            }
            default: return {
               type:'error',
               resultCode: ResultCode.UnknownError,
            }
        }
       
       }
       throw err
   }
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