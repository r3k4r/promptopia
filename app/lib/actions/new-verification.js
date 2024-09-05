'use server'


import { prisma } from "../db";
import { getVerificationTokenByToken } from "@/data/verificationToken/verificationToken";
import { ResultCode } from "../errors";


export const newVerification = async (token) => {
    const existingToken = await getVerificationTokenByToken(token) 

    if(!existingToken){
        return {
            type: 'error',
            resultCode: ResultCode.TokenExisting,
        }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if(hasExpired){
        return{
            type : 'error',
            resultCode: ResultCode.ExpiredToken,
        }
    }
}