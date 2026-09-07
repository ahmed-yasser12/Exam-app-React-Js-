import { useForm, type SubmitHandler } from "react-hook-form";
import type { IResetPasswordValues } from "../../types/reset-password";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "../../schemas/ResetSchema";
import { UseResetPassword } from "../../apis/mutation/use-reset-password";
import { Input } from "@/components/Ui/inputs/input";
import { Field, FieldError, FieldLabel } from "@/components/Ui/field/field";
import FeedBack from "@/shared/components/feedBack";
import { Button } from "@/components/Ui/button/button";
import DescForm from "../../shared/components/DescForm";
import { Link, useSearchParams } from "react-router";
import { ChevronLeft } from "lucide-react";

function RessetPasswordForm() {
  const  [searchParams] =useSearchParams();
  const token =searchParams.get("token")
  const {mutate:resetPass ,isPending , error}= UseResetPassword()
  const {handleSubmit ,formState , register} = useForm<IResetPasswordValues>({
    defaultValues:{
      newPassword:"",
      confirmPassword:""
    },
    resolver :zodResolver(ResetPasswordSchema)
  });
   const onSubmit: SubmitHandler<IResetPasswordValues> = (data) => {
    if (!token) return 
      resetPass({token , ...data})
    };
  return (
    <div>
      <p className="text-gray-500 text-base mt-2.5 mb-10">
        Create a new strong password for your account.
      </p>
      {/* <FormProvider {...form}> */}
      <form
        className="w-full max-w-113 mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* new password */}
        <Field aria-invalid={!!formState.errors.newPassword}>
          <FieldLabel htmlFor="newPassword">newPassword</FieldLabel>
          <Input
            type="password"
            id="newPassword"
            placeholder="Enter Your password "
            {...register("newPassword")}
          />
          {formState.errors.newPassword && (
            <FieldError>{formState.errors.newPassword.message}</FieldError>
          )}
        </Field>
        {/* confirm password */}
       <Field aria-invalid={!!formState.errors.confirmPassword}>
          <FieldLabel htmlFor="confirmPassword">confirmPassword</FieldLabel>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Enter Your confirm password "
            {...register("confirmPassword")}
          />
          {formState.errors.confirmPassword && (
            <FieldError>{formState.errors.confirmPassword.message}</FieldError>
          )}
        </Field>
        {/* FeedBack Error  */}
        {error && <FeedBack>{error.message}</FeedBack>}

        <Button
          isloading={isPending}
          disabled={formState.isSubmitted && !formState.isValid}
          className={"w-full mt-2 self-end"}
          type="submit"
          variant={"default"}
        >
          Reset Password
        </Button>
        {error  &&  <Button
          isloading={isPending}
          disabled={formState.isSubmitted && !formState.isValid}
          className={"w-full mt-2 self-end"}
          type="submit"
          variant={"outline"}
          render={<Link to={"/forget-password"}><ChevronLeft /> </Link>}
        >
          
        </Button>}
        <div className="flex-col  items-center text-center justify-center mt-9">
          <DescForm className={"  w-full"}>
            Don’t have an account?{" "}
            <Button variant="link" className={"text-blue-600 inline "}>
              <Link to={"/register"}>Create yours </Link>
            </Button>
          </DescForm>
        </div>
      </form>
      {/* </FormProvider> */}
    </div>
  );
}

export default RessetPasswordForm;
