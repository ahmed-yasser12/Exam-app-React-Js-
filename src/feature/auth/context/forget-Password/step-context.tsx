/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

import { ForgetPasswordSteps, type IForgetPasswordStep } from "../../constants/forget-password.constants";

interface StepContextValue {
  step: IForgetPasswordStep;
  setStep: React.Dispatch<React.SetStateAction<IForgetPasswordStep>>;
}

export const ForgetPasswordStepContext = createContext<StepContextValue | null>(null);

interface StepProviderProps {
  children: React.ReactNode;
}

export default function ForgetPasswordStepProvider({
  children,
}: StepProviderProps) {
  const [step, setStep] = useState<IForgetPasswordStep>(
    ForgetPasswordSteps.EMAIL
  );

  return (
    <ForgetPasswordStepContext.Provider value={{ step, setStep }}>
      {children}
    </ForgetPasswordStepContext.Provider>
  );
}