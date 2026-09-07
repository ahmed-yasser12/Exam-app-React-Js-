import { useFormContext } from "react-hook-form";

import { Button } from "@/components/Ui/button/button";
import { Field, FieldError, FieldLabel } from "@/components/Ui/field/field";
import { Input } from "@/components/Ui/inputs/input";

import type { IForgetPasswordFormValues } from "../../types/forget-password";

import { ChevronRight } from "lucide-react";
import { UseForgetPassword } from "../../apis/mutation/use-forget-password";
import { toast } from "@/components/Ui/toast";

function EmailStep() {
  const { mutate, isPending } = UseForgetPassword();

  const { register, handleSubmit, formState } =
    useFormContext<IForgetPasswordFormValues>();

  function onSubmit(values: IForgetPasswordFormValues) {
    mutate(
      {
        email: values.email,
        redirectUrl: `${window.location.origin}/reset-password`,
      },
      { onSuccess: () => {
        toast.add({
          type:"success",
          description:"Check your email to reset your password."
        });
      } },
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <FieldLabel>Email</FieldLabel>

        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email")}
        />

        {formState.errors.email && (
          <FieldError>{formState.errors.email.message}</FieldError>
        )}
      </Field>

      <Button type="submit" isloading={isPending} className="w-full mt-8">
        Next
        <ChevronRight />
      </Button>
    </form>
  );
}

export default EmailStep;
