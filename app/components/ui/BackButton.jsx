'use client'

import { useRouter } from 'next/navigation';

export default function BackButton(){
    const router = useRouter();


    return (
        <button onClick={()=>router.back()} className={`peer flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 px-3 rounded-full`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-700 dark:text-white " >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <p className={`font-semibold text-gray-700 dark:text-white`}>Back</p>
        </button>
)
}