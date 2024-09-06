import BackButton from "@/app/components/ui/BackButton"


const AuthLayout = ({children}) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className={`absolute top-0 left-7 xl:left-0 mt-10`}> 
        <BackButton />
      </div>
        {children}
    </section>
  )
}

export default AuthLayout