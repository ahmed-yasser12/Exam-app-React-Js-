import LoginForm from "../../components/login/Login"
import Heading from "../../shared/components/heading"

function LoginPage() {
  return (
    <div className="flex w-full max-w-113 flex-col gap-10">
      {/* font weigth => 700  */}
      <Heading className="mb-10 text-3xl ">
        Login
      </Heading>
     <LoginForm/>
    </div>
  )
}

export default LoginPage