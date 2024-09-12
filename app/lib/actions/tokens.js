//npm i uuid
import { getVerificationTokenByEmail } from "@/data/verificationToken/verificationToken"
import { getPasswordTokenByEmail } from "@/data/resetPasswordToken/passwordResetToken"
import { v4 as uuidv4 } from "uuid"
import { prisma } from "@/app/lib/db"

export const generateVerificationToken = async (email)=>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000) //expires the token in 1 hour

    const existingToken = await getVerificationTokenByEmail(email)

    if(existingToken){
        await prisma.verificationToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const verificationToken = await prisma.verificationToken.create({
        data : {
            email,
            token,
            expires
        }
    })

    return verificationToken
} 


export const generateResetPasswordToken = async(email)=>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000) //expires the token in 1 hour

    const existingToken = await getPasswordTokenByEmail(email)
    
    if(existingToken){
        await prisma.resetPasswordToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const PasswordResetToken = await prisma.resetPasswordToken.create({
        data : {
            email,
            token,
            expires
        }
    })

    return PasswordResetToken
}