'use client'

import Link from "next/link"
import { ClimbingBoxLoader } from "react-spinners"
import { SyncLoader } from "react-spinners"

export default function NewVerificationForm(){
    return(
    <section className=" w-full flex flex-col items-center justify-center pt-[10%]">
        <div className={`border-2 border-gray-200 bg-white/10 bg-clip-padding backdrop-blur-sm backdrop-filter w-[400px] sm:w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
        <h1 className="text-3xl font-bold text-center">Confirming Your Email</h1>
        <p className="text-sm pt-3 text-gray-400 font-semibold text-center">This might take some time</p>
        <br />
            <div className={`flex items-center justify-center w-full`}>
                <ClimbingBoxLoader />
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