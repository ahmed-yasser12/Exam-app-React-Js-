import { FormProvider, useForm } from "react-hook-form";
import { ForgetPasswordSteps } from "../../constants/forget-password.constants";
import EmailStepPassword from "./step/email-step";
import PasswordStep from "./step/reset-password-step";
import Heading from "../../shared/components/heading";
import { UseForgetPassword } from "../../context/forget-Password/use-step";
import type { IForgetPasswordFormValues } from "../../types/forget-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgetPasswordSchema } from "../../schemas/forgetPassword";

function ForgetPasswordForm() {
  // hooks
  const { step } = UseForgetPassword();
  const form = useForm<IForgetPasswordFormValues>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgetPasswordSchema),
  });

  // functions
  function renderStep() {
    switch (step) {
      case ForgetPasswordSteps.EMAIL:
        return <EmailStepPassword />;
      case ForgetPasswordSteps.PASSWORD:
        return <PasswordStep />;
      default:
        break;
    }
  }
  return (
    <FormProvider {...form}>
      <div className="flex w-full max-w-113 flex-col">
        {/* heading */}
        <Heading className="mb-2.5 text-3xl ">Forgot Password</Heading>
        {renderStep()}
      </div>
    </FormProvider>
  );
}

export default ForgetPasswordForm;
