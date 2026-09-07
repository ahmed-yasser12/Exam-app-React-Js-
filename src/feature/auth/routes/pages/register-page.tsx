import StepProvider from "../../context/step-context";
import RegisterContent from "../../components/RegisterContent";

function RegisterPage() {
  return (
    <StepProvider>
      <RegisterContent />
    </StepProvider>
  );
}

export default RegisterPage;
