import { signOut } from 'next-auth/react'
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
            <button onClick={signOut} className='black_btn' type="submit">Sign Out</button>
    )
}