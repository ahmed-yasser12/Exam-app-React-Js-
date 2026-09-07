import { Button } from "@/components/Ui/button/button";
import { useForm, useFormContext, type SubmitHandler } from "react-hook-form";
import type { IRegisterFormValues } from "../../types/register";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FeedBack from "@/shared/components/feedBack";
import { Field, FieldError, FieldLabel } from "@/components/Ui/field/field";
import Heading from "../../shared/components/heading";
import { Input } from "@/components/Ui/inputs/input";
import { useCreatAccount } from "../../apis/mutation/use-create-account";
import { useStep } from "../../context/use-step";
import { RegisterSteps } from "../../constants/register.constants";
import  { ChevronLeft } from "lucide-react";
import  { PasswordSchema } from "../../schemas/passwordSchema";
type IPasswordFormValues = z.infer<typeof PasswordSchema>;
function PasswordStep() {
  // mutation
  const { mutate: createAccount, isPending, error } = useCreatAccount();
  // hooks
  const { getValues, reset } = useFormContext<IRegisterFormValues>();
  const { handleSubmit, formState, register } = useForm<IPasswordFormValues>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(PasswordSchema),
  });
  const { setStep } = useStep();

  // functions
  const onSubmit: SubmitHandler<IPasswordFormValues> = (values) => {
    reset({
      ...getValues(),
      ...values,
    });
    createAccount({ ...getValues(), ...values });
  };

  return (
    // information step
    <div className="max-w-113 w-full">
      <div>
        {/* heading */}
        <Heading className=" text-2xl text-blue-600 ">
          <Button variant={"outline"} onClick={()=>setStep(RegisterSteps.INFORMATION)}><ChevronLeft /> </Button> Create a strong password
        </Heading>
        {/*  enter code   */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6.5">
          {/* password */}
          <Field>
            <FieldLabel htmlFor="password">password*</FieldLabel>
            <Input type="password" id="password" {...register("password")} />
            {formState.errors.password && (
              <FieldError> {formState.errors.password.message}</FieldError>
            )}
          </Field>
          {/* confirmPssword */}
          <Field>
            <FieldLabel htmlFor="confirmPassword">confirmPassword*</FieldLabel>
            <Input
              id="confirmPassword"
              type="password"
              placeholder=" user123 "
              {...register("confirmPassword")}
            />
            {formState.errors.confirmPassword && (
              <FieldError>
                {" "}
                {formState.errors.confirmPassword.message}
              </FieldError>
            )}
          </Field>

          {error && <FeedBack>{error.message}</FeedBack>}

          {/* Button submit */}
          <Button
            isloading={isPending}
            disabled={formState.isSubmitted && !formState.isValid}
            variant="default"
            type="submit"
            className="mt-10 mb-9 w-full"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}
export default PasswordStep;
