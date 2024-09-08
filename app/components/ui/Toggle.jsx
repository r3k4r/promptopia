'use client'


import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { signOut } from 'next-auth/react'
import { useState, useEffect } from "react"
import Link from "next/link";


export const DesctopToggle = ({session}) => {
    const [image, setImage] = useState('')

    useEffect(() => {
    if(session?.user?.image){
      setImage(session?.user?.image)
    }
  },[])

  return (
    <div className={`flex items-center justify-center gap-2`}>
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`flex items-center justify-center gap-2 flex-row-reverse`}>
        <Image
        src={image}
        width={37}
        height={37}
        quality={100}
        className='rounded-full'
        alt='profile'
        />
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 px-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href={`/profile`}
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile Setting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              FAQ
            </a>
          </MenuItem>
            <MenuItem>
            <div onClick={signOut} className="block rounded-lg px-4 py-2 text-sm font-semibold text-red-600 data-[focus]:bg-red-600 data-[focus]:text-white cursor-pointer">
              Sign Out 
            </div>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>

  </div>
  )
}

export const MobileToggle = ({session})=>{
  const [image, setImage] = useState('')

    useEffect(() => {
    if(session?.user?.image){
      setImage(session?.user?.image)
    }
  },[])
  
  return (
    <div className={`flex items-center justify-center gap-2`}>
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`flex items-center justify-center gap-2 flex-row-reverse`}>
        <Image
        src={image}
        width={37}
        height={37}
        quality={100}
        className='rounded-full'
        alt='profile'
        />
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 px-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              href={`/profile`}
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Profile Setting
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              FAQ
            </a>
          </MenuItem>
          <MenuItem>
              <Link className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900" href={"/create-prompt"}>
                Create Prompt
            </Link>
          </MenuItem>
            <MenuItem>
            <div onClick={signOut} className="block rounded-lg px-4 py-2 text-sm font-semibold text-red-600 data-[focus]:bg-red-600 data-[focus]:text-white cursor-pointer">
              Sign Out 
            </div>
            </MenuItem>
        </div>
      </MenuItems>
    </Menu>

  </div>
  )
}