
import Link from "next/link";
import Image from "next/image";
import { LoginButton } from "@/app/components/ui/Buttons";
import { auth } from "@/auth"
import {DesktopProfileToggle, MobileProfileToggle} from "./ProfileToggle";


const Nav = async() => {
  const session = await auth()
  
 

  return (
    <nav className='flex justify-between items-center w-full mb-16 pt-3'>
      <Link href='/' className='gap-2 flex items-center justify-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text dark:text-white'>Promptopia</p>
      </Link>

      {/* desktop navigation */}
      <div className='sm:flex hidden'>
          {session? <DesktopProfileToggle session={session}/>: <LoginButton />}
      </div>

       {/* mobile navigation */}
      <div className='sm:hidden flex relative'>
         {session? <MobileProfileToggle session={session}/>: <LoginButton />}   
      </div>
    </nav>
  );
};

export default Nav;


