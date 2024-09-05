'use client'

import Link from "next/link"
import { SyncLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"

export default function NewVerificationForm(){
    const params = useSearchParams()

    const token = params.get("token")

    const onSubmit = useCallback(()=>{
        console.log(token)
    },[token])

    useEffect(()=>{
        onSubmit()
    },[onSubmit])

    return(
    <section className="w-full flex flex-col items-center justify-center pt-[10%]">
        <div className={`border-2 border-gray-200 bg-white/10 bg-clip-padding backdrop-blur-sm backdrop-filter w-[400px] sm:w-[500px] h-fit p-8 bg-white rounded-lg flex flex-col items-center justify-center`}>
        <h1 className="text-3xl font-bold text-center">Confirming Your Email</h1>
        <p className="text-sm pt-3 text-gray-400 font-semibold text-center">This might take some time</p>
        <br />
            <div className={`flex items-center justify-center w-full`}>
                <SyncLoader />
            </div>
        <br />
        <div className={`w-full flex flex-col items-center justify-center py-5`}>
            <Link className={`green_btn`} href={'/auth/login'}>
            <button >Back to Login</button>
            </Link>  
        </div>
        </div>
    </section>
    )
}