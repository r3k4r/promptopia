
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <div className={`w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
          <h1 className="text-3xl font-bold text-center">Sign In</h1>
          <p className="text-md pt-3 text-gray-400 font-semibold text-center">Enter your email and password to sign in</p>

          <div className={`flex flex-col items-center justify-center`}>
            <LoginForm />
          </div>
        </div>
    </section>
  )
}

export default Login