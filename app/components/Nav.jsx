
import Link from "next/link";
import Image from "next/image";
import { LoginButton, SignOut } from "@/app/components/ui/Buttons";
import { auth } from "@/auth"

const Nav = async() => {
  const session = await auth()

  console.log(session)


 

  return (
    <nav className='flex justify-between items-center w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      <div className='sm:flex hidden'>
       
    
              {session? <SignOut />: <LoginButton />}
              
      </div>

     
      <div className='sm:hidden flex relative'>
        
        
      {session? <SignOut />: <LoginButton />}
             
      </div>
    </nav>
  );
};

export default Nav;
