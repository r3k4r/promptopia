'use client'

import { useEffect, useState, useRef } from "react"
import { useFormState, useFormStatus } from 'react-dom'
import { getMessageFromCode } from "@/app/lib/errors"
import { toast } from 'react-hot-toast';
import { useSession } from "next-auth/react";
import { GeneralInformationUpdate } from "../lib/actions/updateGeneralInformation";

export default function GenaralInformation(){
    const [error, setError] = useState('');
    const [result, dispatch] = useFormState(GeneralInformationUpdate, undefined)
    const { pending } = useFormStatus()
    const {data : session} = useSession()
    

    useEffect(() => {
        if (result) {
          if (result.type === 'error') {
            const errorMessage = getMessageFromCode(result.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          }else if(result.type === 'success'){
            const errorMessage = getMessageFromCode(result.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);

          }
          else {
            toast.success(getMessageFromCode(result.resultCode))
            setError('');
          }
        }
      }, [result])

    return(
    <form  action={dispatch} className='mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
                        
        <h1 className='text-2xl font-bold leading-[1.15] text-black dark:text-white sm:text-xl text-left'>General Infromation</h1>

        <div className='flex md:flex-row flex-col items-start justify-start gap-5'>
           <div className="flex flex-col space-y-1">
                <label htmlFor="fname" className="text-sm font-semibold">First Name</label>
                <input defaultValue={session?.user?.FirstName}  name="fname" type="text" id="fname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 

            <div className="flex flex-col space-y-1">
                <label htmlFor="lname" className="text-sm font-semibold">Last Name</label>
                <input defaultValue={session?.user?.LastName}  name="lname" type="text" id="lname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 
        </div>

        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input defaultValue={session?.user?.email}  name="email" type="email" id="email" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
        </div> 

        {error && (
        <div className={`p-3 ${result.type === 'success' ? 'bg-green-200' : 'bg-red-200'} rounded-md `}>
          <p className={`${result.type === 'success' ? 'text-green-600' : 'text-red-600'}  font-semibold text-sm flex items-center justify-start gap-3`}>
          {result.type === 'success' ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>}
            {error}</p>
        </div>
      )}

      {
        result?.showButton ?
        <div className={`p-3 bg-yellow-300 rounded-md `}>
            <p className={`text-black font-semibold text-sm flex items-center justify-start gap-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                Verification Email Sent, Please Verify Your Email!
            </p>
          </div>
          : 
          null
    }

        <div className="flex flex-col space-y-1">
            <button type='submit' className={`text-white font-semibold blue_gradient_bg transition-all dark:hover:bg-gray-800 rounded-md w-fit p-2 px-4`}>
                Save
            </button> 
        </div> 
    </form>
    )
}