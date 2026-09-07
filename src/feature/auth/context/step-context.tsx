/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import {
  RegisterSteps,
} from "../constants/register.constants";
import type { IRegisterStep } from "../types/register";

interface StepContextValue {
  step: IRegisterStep;
  setStep: React.Dispatch<React.SetStateAction<IRegisterStep>>;
}

export const StepContext = createContext<StepContextValue | null>(null);

interface StepProviderProps {
  children: React.ReactNode;
}

export default function StepProvider({
  children,
}: StepProviderProps) {
  const [step, setStep] = useState<IRegisterStep>(
    RegisterSteps.EMAIL
  );

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}