

import { auth } from '@/auth';


const settings = async() => {
    const session = await auth()
    console.log(session)

return (
    <>
     <section className='w-full max-w-full flex-start flex-col '>
        <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
            <span className='blue_gradient'>Settings</span>
        </h1>

        <form className='mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
           
            <h1 className='text-2xl font-bold leading-[1.15] text-black dark:text-white sm:text-2xl text-left'>General Infromation</h1>

           <div className='flex md:flex-row flex-col items-start justify-start gap-5'>
            <div className="flex flex-col space-y-1">
                    <label htmlFor="fname" className="text-sm font-semibold">First Name</label>
                    <input value={session.user.FirstName}  name="fname" type="text" id="fname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[300px] disabled:bg-white" />
                </div> 

                <div className="flex flex-col space-y-1">
                    <label htmlFor="lname" className="text-sm font-semibold">Last Name</label>
                    <input value={session.user.LastName}  name="lname" type="text" id="lname" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[300px] disabled:bg-white" />
                </div> 
           </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold">Email</label>
                <input value={session.user.email}  name="email" type="email" id="email" className="text-gray-500 dark:text-white dark:bg-white/10 outline-0 focus:border-black dark:focus:border-white focus:outline-none focus:ring-0 border border-gray-200 dark:border-gray-700 font-semibold  p-2 rounded-md w-[300px] disabled:bg-white" />
            </div> 

            <div className="flex flex-col space-y-1">
               <button className={`text-white font-semibold blue_gradient_bg transition-all dark:hover:bg-gray-800 rounded-md w-fit p-2 px-4`}>
                 Save
               </button> 
            </div> 
        </form>
    </section>
    </>
  )
}

export default settings