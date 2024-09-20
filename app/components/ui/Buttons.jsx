import { signOut } from 'next-auth/react'
import Link from 'next/link'

export function LoginButton({children, mode="redirect", asChild }) {
    return(
        <Link href='/auth/login'>
            <button
                type='button'
                className="rounded-full border border-black dark:border-white bg-black dark:bg-white py-1.5 px-5 text-white dark:text-black transition-all hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white text-center text-sm  flex items-center justify-center;"
                >
                Sign in
            </button>
        </Link>
        )
}


