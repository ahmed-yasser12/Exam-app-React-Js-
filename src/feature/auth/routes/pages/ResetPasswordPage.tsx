import RessetPasswordForm from "../../components/ResetPassword/RessetPasswordForm"
import Heading from "../../shared/components/heading"

function ResetPasswordPage() {
  return (
    <div>
      <Heading className={"text-gray-800 text-3xl "}>Create a New Password</Heading>
      <RessetPasswordForm />
    </div>
  )
}

export default ResetPasswordPage