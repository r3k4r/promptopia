import { signOut } from '@/auth'
import Link from 'next/link'

export function LoginButton({children, mode="redirect", asChild }) {
    return(
        <Link href='/auth/login'>
            <button
                type='button'
                className='black_btn'
                >
                Sign in
            </button>
        </Link>
        )
}


export async function SignOut(){
    return(
        <form action={async()=>{
            'use server'

            await signOut()
        }}> 
            <button className='black_btn' type="submit">Sign Out</button>
        </form>    
    )
}