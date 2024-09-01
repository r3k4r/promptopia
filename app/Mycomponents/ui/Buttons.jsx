import Link from 'next/link'

export function LoginButton({children, mode="redirect", asChild }) {
    return(
        <Link href='/auth/login'>
            <button
                type='button'
                onClick={() => {console.log('sign in')} }
                className='black_btn'
                >
                Sign in
            </button>
        </Link>
        )
}