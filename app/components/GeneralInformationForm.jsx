
import { auth } from '@/auth';


export default async function GenaralInformation(){
    const session = await auth()
    

    return(
    <form className='mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
                        
        <h1 className='text-2xl font-bold leading-[1.15] text-black dark:text-white sm:text-xl text-left'>General Infromation</h1>

        <div className='flex md:flex-row flex-col items-start justify-start gap-5'>
           <div className="flex flex-col space-y-1">
                <label htmlFor="fname" className="text-sm font-semibold">First Name</label>
                <input defaultValue={session.user.FirstName}  name="fname" type="text" id="fname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 

            <div className="flex flex-col space-y-1">
                <label htmlFor="lname" className="text-sm font-semibold">Last Name</label>
                <input defaultValue={session.user.LastName}  name="lname" type="text" id="lname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
            </div> 
        </div>

        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input defaultValue={session.user.email}  name="email" type="email" id="email" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[280px] disabled:bg-white" />
        </div> 

        <div className="flex flex-col space-y-1">
            <button type='submit' className={`text-white font-semibold blue_gradient_bg transition-all dark:hover:bg-gray-800 rounded-md w-fit p-2 px-4`}>
                Save
            </button> 
        </div> 
    </form>
    )
}