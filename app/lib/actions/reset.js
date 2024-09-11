'use server'

import { getUserByEmail } from "@/data/user"
import { ResultCode } from "@/app/lib/errors"; 


 export const reset = async(prevstate, formData)=>{
    const email = formData.get("email")

    const existingUser = await getUserByEmail(email)

    if(!existingUser){
        return {
            type:'error',
            resultCode: ResultCode.UserDoesNotExist,
        }
    }

    return{
        type: 'reset',
        resultCode: ResultCode.ResetPassword,
    }
 }