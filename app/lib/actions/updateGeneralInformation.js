'use server'

import { auth } from "@/auth"
import { prisma } from "../db"
import { ResultCode } from "../errors"
import { generateVerificationToken } from './tokens';
import { sendVerficationEmail } from '../mail';


export const GeneralInformationUpdate = async (prevstate, formData) => {
    const fname = formData.get("fname")
    const lname = formData.get("lname")
    const email = formData.get("email")

    const data = await auth()
    const currentEmail = data.user.email

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });


    if(fname === '' || lname === '' || email === ''){
        return {type: 'error', resultCode: ResultCode.MissingFields}
    }

    if(existingUser){
        return{
            type:'error',
            resultCode: ResultCode.UserAlreadyExists, 
        }
    }
    if(email === currentEmail){
        const user = await prisma.user.update({
            where: {
                id : data.user.id
            },
            data: {
                FirstName: fname,
                LastName: lname,
                email : email
            }
        })  

        return {
            type: 'success',
            resultCode: ResultCode.InfromationUpdated
        }
    }

    if(email !== currentEmail){
        await prisma.user.update({
            where : {
                id : data.user.id
            }, 
            data : {
                FirstName: fname,
                LastName: lname,
                email : email,
                emailVerified : null
            }
        })

        const verificationToken = await generateVerificationToken(email)
        await sendVerficationEmail(email, verificationToken.token)

        return {
            type: 'success',
            resultCode: ResultCode.InfromationUpdated,
            showButton : true
        }
    
    }
    
}