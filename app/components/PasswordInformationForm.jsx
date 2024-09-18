'use client'

import { useEffect, useState, useRef } from "react"
import { useFormState, useFormStatus } from 'react-dom'
import { getMessageFromCode } from "@/app/lib/errors"
import { toast } from 'react-hot-toast';
import { useSession } from "next-auth/react";
import { resetPasswordForSettings } from "../lib/actions/new-password";

export default function PasswordInformation(){
    const [error, setError] = useState('');
    const [result, dispatch] = useFormState(resetPasswordForSettings, undefined)
    const { pending } = useFormStatus()
    const formRef = useRef(null);
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

            if (formRef.current) {
              formRef.current.reset();
            }
          }else {
            toast.success(getMessageFromCode(result.resultCode))
            setError('');
          }
        }
      }, [result])


    
    return(
    <form ref={formRef} action={dispatch} className='xl:mt-10 w-full h-fit max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
                    
        <h1 className='text-2xl font-bold leading-[1.15] text-black dark:text-white sm:text-xl text-left'>Password Infromation</h1>

        <div className='flex md:flex-row flex-col items-start justify-start gap-5'>
        <div className="flex flex-col space-y-1">
                <label htmlFor="current_password" className="text-sm font-semibold">Current Password</label>
                <input  placeholder='********' name="current_password" type="password" id="current_password" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 

            <div className="flex flex-col space-y-1">
                <label htmlFor="new_password" className="text-sm font-semibold">New password</label>
                <input  placeholder='********' name="new_password" type="password" id="new_password" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 
        </div>

        <div className="flex flex-col space-y-1">
            <label htmlFor="confirm_password" className="text-sm font-semibold">Confirm Password</label>
            <input  placeholder='********' name="confirm_password" type="password" id="confirm_password" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
        </div> 
        
        <div id='warning'>
            <h1 className='text-[13px] xl:text-md black dark:text-white font-semibold'>Password requirements:</h1>
            <p className={`text-[13px] xl:text-md text-gray-600 dark:text-gray-400`}>Ensure that these requirements are met:</p>
                <div className={`flex items-start justify-start flex-col pl-5`}>
                    <p className={`text-[12px] xl:text-[13px] leading-[1rem] text-gray-600 dark:text-gray-400`}>At least 8 characters (and up to 100 characters)</p>
                    <p className={`text-[12px] xl:text-[13px] leading-[1rem] text-gray-600 dark:text-gray-400`}>At least one uppercase character</p>
                    <p className={`text-[12px] xl:text-[13px] leading-[1rem] text-gray-600 dark:text-gray-400`}>Inclusion of at least one special character, e.g., ! @ # ?</p>
                </div>

        </div>

        <input name="email" type="hidden" value={session?.user?.email}/>

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

        <div className="flex flex-col space-y-1">
            <button aria-disabled={pending} type="submit" className={`text-white font-semibold blue_gradient_bg transition-all dark:hover:bg-gray-800 rounded-md w-fit p-2 px-4`}>
                Save
            </button> 
        </div> 
    </form>
    )
}
