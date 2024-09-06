'use client'

import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

const Toggle = ({session}) => {
    const [toggle, setToggle] = useState(false)
    
  return (
    <div className={`flex items-center justify-center gap-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>


        <Image
        src={session?.user.image}
        width={37}
        height={37}
        quality={100}
        className='rounded-full'
        alt='profile'
        />
  </div>
  )
}

export default Toggle