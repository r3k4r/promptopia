

import NewPassword from "@/app/components/auth/NewPassword"

const ForgotPassword = () => {
  return (
    <section className={`w-full flex flex-col sm:flex-row items-center justify-center sm:px-16 px-8 sm:py-[200px] py-[200px]`}>
         <NewPassword />
    </section>
)
}

export default ForgotPassword