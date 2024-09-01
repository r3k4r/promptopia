'use client' 

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useState } from "react"

const Password = () => {
    const [passwordShown, setShowPassword] = useState(false);

  return (
   <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="password" className="text-sm font-semibold">Password</label>
        <input type={passwordShown ? "text" : "password"} id="password" className="peer p-2 border border-gray-300 rounded-md " />
        <i className=" text-gray-400 peer-focus:text-gray-900" onClick={() => setShowPassword(!passwordShown)}>
        {passwordShown ? (
            <EyeIcon className="h-5 w-5" />
        ) : (
            <EyeSlashIcon className="h-5 w-5" />
        )}
        </i>
    </div>
  )
}

export default Password