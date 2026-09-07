import { Button } from "@/components/Ui/button/button";
import { Field, FieldLabel } from "@/components/Ui/field/field";
import { Input } from "@/components/Ui/inputs/input";

interface EmailStepContentProps {
  email: string;
  onEmailChange: (email: string) => void;
  onNext: () => void;
}

export function EmailStepContent({
  email,
  onEmailChange,
  onNext,
}: EmailStepContentProps) {

  return (
    <div className="px-6 pb-6">
      <h2 className="mb-6 text-xl font-bold text-blue-600">
        Enter your new email
      </h2>

      <Field>
        <FieldLabel htmlFor="new-email">Email</FieldLabel>

        <Input
          id="new-email"
          type="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="user@example.com"
        />
      </Field>

      <Button
        type="button"
        onClick={onNext}
        className="mt-8 w-full"
      >
        Next
      </Button>
    </div>
  );
}
