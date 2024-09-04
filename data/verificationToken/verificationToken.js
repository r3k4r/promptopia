import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getVerificationTokenByEmail = async (email)=>{
    try{
        const verificationToken = await prisma.verificationToken.findFirst({
            where : { email } 
        })
        return verificationToken;
    }catch(err){
        return err
    }
}
export const getVerificationTokenByTken = async (token)=>{
    try{
        const verificationToken = await prisma.verificationToken.findUnique({
            where : { token } 
        })
        return verificationToken;
    }catch(err){
        return err
    }
}