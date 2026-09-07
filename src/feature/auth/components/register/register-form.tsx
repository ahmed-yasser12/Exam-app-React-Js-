import EmailStep from "./email-step";
import { FormProvider, useForm } from "react-hook-form";
import type { IRegisterFormValues, IRegisterStep } from "../../types/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../schemas/RegisterSchema";
import { RegisterSteps } from "../../constants/register.constants";
import OtpVerificationStep from "./OtpVerificationStep";
import InformationStep from "./information-step";
import PasswordStep from "./password-step";

interface IRegisterFormProps {
  step: IRegisterStep;
}
function RegisterForm({ step }: IRegisterFormProps) {
  const form = useForm<IRegisterFormValues>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    resolver: zodResolver(RegisterSchema),
  });
  
  function renderStep() {
    switch (step) {
        case RegisterSteps.EMAIL:
            return <EmailStep  />;
        case RegisterSteps.OTP_VERIFICATION:
            return <OtpVerificationStep  />;
        case RegisterSteps.INFORMATION:
            return <InformationStep />
        case RegisterSteps.PASSWORD:
            return <PasswordStep/>
        default:
            break;
    }
  }
  return (
    <FormProvider {...form}>
      <div className={"mt-4"}>
       { renderStep()}
      </div>
    </FormProvider>
  );
}

export default RegisterForm;
