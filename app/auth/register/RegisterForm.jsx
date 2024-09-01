
import Form from "./Form";

const LoginForm = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
        <div className={`w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <p className="text-md pt-3 text-gray-400 font-semibold text-center">Create an account</p>

          <div className={`flex flex-col items-center justify-center`}>
            <Form />
          </div>
        </div>
    </section>
  )
}

export default LoginForm