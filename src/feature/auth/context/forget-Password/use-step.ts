import { useContext } from "react";
import { ForgetPasswordStepContext } from "./step-context";

export function UseForgetPassword() {
  const context = useContext(ForgetPasswordStepContext);

  if (!context) {
    throw new Error("useStep must be used inside StepProvider");
  }

  return context;
}