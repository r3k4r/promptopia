
import Password from "@/app/components/Password";
import Social from "../../components/Social";
import Link from "next/link";
import {signIn} from '@/app/lib/action'
const Form = async () => {
const login=await signIn();

  return (
    <form action={login} className="flex flex-col space-y-5 mt-5 w-[370px] ">
        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input type="email" id="email" className="p-2 border border-gray-300 rounded-md" />
        </div>

        <div className="flex flex-col space-y-1 w-full">
        <label htmlFor="password" className="text-sm font-semibold">Password</label>
        <input type="password" id="password" className="peer p-2 border border-gray-300 rounded-md " />
        {/* <i className=" text-gray-400 peer-focus:text-gray-900" onClick={() => setShowPassword(!passwordShown)}>
        {passwordShown ? (
            <EyeIcon className="h-5 w-5" />
        ) : (
            <EyeSlashIcon className="h-5 w-5" />
        )}
        </i> */}
    </div>

        <button type="submit" className="bg-primary-orange hover:bg-orange-600 text-white p-3 rounded-md font-bold">Login</button>

        <div className="flex space-y-1 items-right justify-end text-[15px]">
            <p>Forgot password?</p>
        </div>

        <div className="separator">
          <span>or</span>
        </div>

        <Social />

        <div className={`flex items-center justify-center`}>
            <p>Don't have an account? <Link href="/auth/register" className="text-primary-orange font-bold">Register</Link></p>
        </div>            
  </form>
  )
}

export default Form