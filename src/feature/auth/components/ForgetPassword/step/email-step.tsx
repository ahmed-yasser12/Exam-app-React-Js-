import { Field, FieldError, FieldLabel } from "@/components/Ui/field/field";
import { Input } from "@/components/Ui/inputs/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { EmailStepSchema } from "../../../schemas/emailStep";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { Button } from "@/components/Ui/button/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import DescForm from "@/feature/auth/shared/components/DescForm";
import { UseForgetPassword } from "@/feature/auth/apis/mutation/use-forget-password";
import FeedBack from "@/shared/components/feedBack";
import { toast } from "@/components/Ui/toast";

type EmailStepSchema = z.infer<typeof EmailStepSchema>;

function EmailStepPassword() {
 
  const {mutate:sendOtp , isPending, error}= UseForgetPassword()
  const { register, handleSubmit, formState } = useForm<EmailStepSchema>({
    defaultValues: {
      email:"",
    },
    resolver: zodResolver(EmailStepSchema),
  });
  //   functions
  const onSubmit: SubmitHandler<EmailStepSchema> = (data: EmailStepSchema) => {
    sendOtp({email:data.email ,redirectUrl:`${window.location.origin}/reset-password`},{onSuccess:()=>{
      toast.add({
        type:"success",
        description:"Check your email to reset your password."
      })
    }})
  };
  return (
    <div>
      <p className={"text-gray-500 text-base mb-10 font-normal"}>
        Don’t worry, we will help you recover your account.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          {/* label */}
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          {/* Input  */}
          <Input
            id="form-email"
            type="email"
            className={"max-w-113 max-h-11.5"}
            {...register("email")}
            placeholder="john@example.com"
          />
          {/* Error */}
          {formState.errors.email && (
            <FieldError>{formState.errors.email.message}</FieldError>
          )}
        </Field>
        {/* FeedBack Error  */}
        {error && <FeedBack>{error.message}</FeedBack>}

        {/* Button submit */}
        <Button
          isloading={isPending}
          disabled={formState.isSubmitted && !formState.isValid}
          variant="default"
          type="submit"
          className="mt-10 mb-9 w-full"
        >
          Next <ChevronRight />
        </Button>
        {/* footer Form  */}
  
          <DescForm className={"w-full  flex  mx-auto "}>
            Don’t have an account?
            <Button
              type="submit"
              variant="link"
              className={"text-blue-600 inline"}
              render={<Link to={"/register"}>Create </Link>}
            >
              
            </Button>
          </DescForm>
    
      </form>
    </div>
  );
}

export default EmailStepPassword;
