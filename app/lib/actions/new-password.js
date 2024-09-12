'use server'


import { prisma } from "../db";
import { ResultCode } from "../errors";
import { getUserByEmail } from "@/data/user";
import { getPasswordTokenByToken } from './../../../data/resetPasswordToken/passwordResetToken';
import bcrypt from 'bcryptjs'

export const newPassword = async(prevstate, formData) => {
    const password = formData.get("password")
    const confirmPassword = formData.get("Confirmpassword")
    const token = formData.get("token")

    try{

    if(!token){
        return{
            type  : 'error',
            resultCode : ResultCode.TokenExisting
        }
    }

    if(validatePassword(password)){

        const existingToken = await getPasswordTokenByToken(token)

        const expiredToken = new Date(existingToken.expires) < new Date()

        if(!existingToken || expiredToken){
            return {
                type: 'error',
                resultCode: ResultCode.ExpiredToken,
            }
        }

        if(password !== confirmPassword){
            return{
                type : 'error',
                resultCode : ResultCode.PasswordsDontMatch
            }
        }

        const existingUser =  await getUserByEmail(existingToken.email)

        if(!existingUser){
            return{
                type : 'error',
                resultCode: ResultCode.UserDoesNotExist,
            }
        }

        const hashedPassword =await bcrypt.hash(password, 12)

        await prisma.user.update({
            where : { id : existingUser.id },
            data : {
                password : hashedPassword
            }
        })

        await prisma.resetPasswordToken.delete({
            where : { id : existingToken.id }
        })

        return {
            type: 'success',
            resultCode: ResultCode.PasswordReseted,
        };

    }else if(!validatePassword(password)){
        return {
            type: 'error',
            resultCode: ResultCode.InvalidPassword,
        };
    }

    }catch (err) {
        console.error("THIS IS THE UNKNOWN ERROR: " + err);
        return {
            type: 'error',
            resultCode: ResultCode.UnknownError,
        };
    }
}


function validatePassword(password) {
    // Password validation logic here
    // You can use a regular expression or any other method to validate the password format
    // Example regular expression for password validation:
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  } 