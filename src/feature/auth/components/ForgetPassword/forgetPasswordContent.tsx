import ForgetPasswordStepProvider from "../../context/forget-Password/step-context";
import ForgetPasswordForm from "./Forget-password-form";

function ForgetPasswordContent() {
  return (
    <ForgetPasswordStepProvider>
      <ForgetPasswordForm />
    </ForgetPasswordStepProvider>
  );
}

export default ForgetPasswordContent;
