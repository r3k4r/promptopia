'use client'

import Social from "@/app/components/Social";
import Link from "next/link";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react"
import { signUp } from "@/app/lib/action";
import { useFormState, useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { getMessageFromCode } from "@/app/lib/action"
import { toast } from 'react-hot-toast';


const Form = () => {
  const [passwordShown, setShowPassword] = useState(false);
  const router = useRouter()
  const [result, dispatch] = useFormState(signUp, undefined)
  const { pending } = useFormStatus()

useEffect(() => {
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <form action={dispatch} className="flex flex-col space-y-5 mt-5 w-[370px] ">
        <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input required name="name" type="text" id="name" className="p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input required name="email" type="email" id="email" className="p-2 border border-gray-300 rounded-md" />
        </div>
       
        <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="password" className="text-sm font-semibold">Password</label>
            <input required name="password" type={passwordShown ? "text" : "password"} id="password" className="peer p-2 border border-gray-300 rounded-md " />
            <i className="absolute left-[798px] bottom-[252px] text-gray-400 peer-focus:text-gray-900" onClick={() => setShowPassword(!passwordShown)}>
            {passwordShown ? (
                <EyeIcon className="h-5 w-5" />
            ) : (
                <EyeSlashIcon className="h-5 w-5" />
            )}
            </i>
        </div>

        <button aria-disabled={pending} type="submit" className="bg-primary-orange hover:bg-orange-600 text-white p-3 rounded-md font-bold">Sign Up</button>

        {/* <div className="flex space-y-1 items-right justify-end text-[15px]">
            <p>Forgot password?</p>
        </div> */}

        <div className="separator">
          <span>or</span>
        </div>

        <Social />

        <div className={`flex items-center justify-center`}>
            <p>Already have an account? <Link href="/auth/login" className="text-primary-orange font-bold">Log In</Link></p>
        </div>            
  </form>
  )
}

export default Form