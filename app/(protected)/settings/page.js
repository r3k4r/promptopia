

import FaSwitch from '@/app/components/ui/FaSwitch';
import GenaralInformation from '@/app/components/GeneralInformationForm';
import PasswordInformation from '@/app/components/PasswordInformationForm'
import { auth } from '@/auth';

const settings = async() => {
    const session = await auth()

return (
    <>
     <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left'>
            <span className='blue_gradient'>Settings</span>
        </h1>
        
        <div className={`flex xl:flex-row flex-col items-start justify-start   gap-5`}>
           <div className='flex flex-col gap-5'>
                <div id='generalInformation'>
                    <GenaralInformation />
                </div>

            {  session.user.image ? null :     
                <div id='TwoFactor'>
                    <form className='w-full max-w-2xl flex flex-col gap-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/20 dark:bg-black/20  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5'>
                        <h1 className='text-2xl font-bold leading-[1.15] text-black dark:text-white sm:text-xl text-left'>General Infromation</h1>
                        <FaSwitch />
                    </form>
                </div>
            }
           </div>
           {  session.user.image ? null :
            <div id='passwordInformation' className='pb-10 lg:pb-4'>
               <PasswordInformation />
            </div>
            }
        </div>
        
    </section>
    </>
  )
}

export default settings