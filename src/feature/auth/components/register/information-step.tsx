import { Button } from "@/components/Ui/button/button";
import { useStep } from "../../context/use-step";
import {
  Controller,
  useForm,
  useFormContext,
  type SubmitHandler,
} from "react-hook-form";
import type { IRegisterFormValues } from "../../types/register";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FeedBack from "@/shared/components/feedBack";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/Ui/field/field";
import Heading from "../../shared/components/heading";
import { Input } from "@/components/Ui/inputs/input";
import { ChevronRight } from "lucide-react";
import { RegisterSteps } from "../../constants/register.constants";
import { PhoneInput } from "@/components/Ui/phone-input";
import { InformationSchema } from "../../schemas/information";
 type InformationFormValues = z.infer<typeof InformationSchema>;
function InformationStep() {
  // hooks
  const { setStep } = useStep();
  const { getValues,reset } = useFormContext<IRegisterFormValues>();
  const { handleSubmit, formState, control, register } =
    useForm<InformationFormValues>({
      defaultValues: {
        firstName: getValues("firstName"),
        lastName: getValues("lastName"),
        username: getValues("username"),
        phone: getValues("phone"),
      },
      resolver: zodResolver(InformationSchema),
    });

  // functions
  const onSubmit: SubmitHandler<InformationFormValues> = (values) => {
    if(formState.errors){
      setStep(RegisterSteps.EMAIL)
    }
    reset({
        ...getValues(),
      ...values,
    } )
    setStep(RegisterSteps.PASSWORD);
  };

  return (
    // information step
    <div className="max-w-113 w-full">
      <div >
        {/* heading */}
        <Heading className=" text-2xl text-blue-600 ">
          Tell us more about you
        </Heading>
        {/*  enter code   */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6.5">
          {/* firstName && LastName */}
          <FieldGroup className={"grid grid-cols-2"}>
            <Field>
              <FieldLabel htmlFor="firstName">First name*</FieldLabel>
              <Input
                id="firstName"
                placeholder="Evil Rabbit"
                {...register("firstName")}
              />
              {formState.errors.firstName && (
                <FieldError> {formState.errors.firstName.message}</FieldError>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Last name*</FieldLabel>
              <Input
                {...register("lastName")}
                id="lastName"
                placeholder="Max Leiter"
              />
              {formState.errors.lastName && (
                <FieldError> {formState.errors.lastName.message}</FieldError>
              )}
            </Field>
          </FieldGroup>
          {/* username */}
          <Field>
            <FieldLabel htmlFor="username">Username*</FieldLabel>
            <Input
              id="username"
              placeholder=" user123 "
              {...register("username")}
            />
            {formState.errors.username && (
              <FieldError> {formState.errors.username.message}</FieldError>
            )}
          </Field>
          {/* phone  */}
          <Field>
            <FieldLabel htmlFor="phone">phone*</FieldLabel>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <PhoneInput placeholder="1012345678" defaultCountry="EG" disabled={field.disabled} {...field} id="phone" />
              )}
            />

            {formState.errors.phone && (
              <FieldError> {formState.errors.phone.message}</FieldError>
            )}
          </Field>
          {formState.errors && (
            <FeedBack>{formState.errors.form?.message}</FeedBack>
          )}

          {/* Button submit */}
          <Button
            disabled={formState.isSubmitted && !formState.isValid}
            variant="outline"
            type="submit"
            className="mt-10 mb-9 w-full"
          >
            Next <ChevronRight />
          </Button>
        </form>
      </div>
    </div>
  );
}
export default InformationStep;
