import type { ILoginFormValues } from "@/feature/auth/types/login";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/feature/auth/schemas/loginSchema";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/Ui/field/field";
import { Input } from "@/components/Ui/inputs/input";
import { Button } from "@/components/Ui/button/button";
import { Link } from "react-router";
import { useLogin } from "@/feature/auth/apis/mutation/use-login";
import FeedBack from "@/shared/components/feedBack";
import DescForm from "../../shared/components/DescForm";
function LoginForm() {
  const { mutate: login, isPending, error } = useLogin();
  const form = useForm<ILoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<ILoginFormValues> = (data) => {
    login(data);
  };
  return (
    <FormProvider {...form}>
      <form
        className="w-full max-w-113 mx-auto flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* userName */}
        <Field aria-invalid={!!form.formState.errors.username}>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            type="text"
            id="username"
            placeholder="Enter Your name "
            {...form.register("username")}
          />
          {form.formState.errors.username && (
            <FieldError>{form.formState.errors.username.message}</FieldError>
          )}
        </Field>
        {/* password */}
        <Field aria-invalid={!!form.formState.errors.password} className="mt-4">
          <FieldLabel htmlFor="password">password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter Your password "
            {...form.register("password")}
          />
          {form.formState.errors.password && (
            <FieldError>{form.formState.errors.password.message}</FieldError>
          )}
          <FieldDescription className="flex justify-end">
            <Button
              nativeButton={false}
              variant="link"
              render={
                <Link to={"/forget-password"} className="mt-2.5   ml-auto ">
                  Forget Your Password ?
                </Link>
              }
            ></Button>
          </FieldDescription>
        </Field>
        {/* FeedBack Error  */}
        {error && <FeedBack>{error.message}</FeedBack>}

        <Button
          isloading={isPending}
          disabled={form.formState.isSubmitted && !form.formState.isValid}
          className={"w-full mt-2 self-end"}
          type="submit"
        >
          Login{" "}
        </Button>
     <div className="flex-col  items-center text-center justify-center mt-9">
         <DescForm className={"  w-full"}>
          Don’t have an account? <Button variant="link" className={"text-blue-600 inline "}> 
            <Link to={"/register"}>Create yours</Link>
          </Button>
        </DescForm></div>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
