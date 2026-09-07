import {
  RegisterStepIndex,
  TOTAL_REGISTER_STEPS,
} from "../constants/register.constants";
import { useStep } from "../context/use-step";
import Heading from "../shared/components/heading";
import { Progress } from "./progress/register-progress";
import RegisterForm from "./register/register-form";

function RegisterContent() {
  const { step } = useStep();
  const currentStep = RegisterStepIndex[step as keyof typeof RegisterStepIndex];
  return (
    <div className="w-full max-w-113">
      <Progress step={currentStep} totalSteps={TOTAL_REGISTER_STEPS} />
      <Heading className  ="mb-4 text-3xl">Create Account</Heading>

      <RegisterForm step={step} />
    </div>
  );
}

export default RegisterContent;
