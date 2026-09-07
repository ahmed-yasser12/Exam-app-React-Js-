import { useContext } from "react";
import { StepContext } from "./step-context";

export function useStep() {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error("useStep must be used inside StepProvider");
  }

  return context;
}