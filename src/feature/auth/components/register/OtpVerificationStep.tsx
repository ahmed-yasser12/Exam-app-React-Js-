import Heading from "../../shared/components/heading";
import { Button } from "@/components/Ui/button/button";
import { RegisterSteps } from "../../constants/register.constants";
import { useStep } from "../../context/use-step";
import {
  Controller,
  useForm,
  useFormContext,
  type SubmitHandler,
} from "react-hook-form";
import type { IRegisterFormValues } from "../../types/register";
import { OtpSchema } from "../../schemas/otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/Ui/input-otp";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyOtp } from "../../apis/mutation/use-verify-otp";
import FeedBack from "@/shared/components/feedBack";
import { useCountdown } from "../../hooks/use-count";
import { RefreshCwIcon } from "lucide-react";
import { useSendOtp } from "../../apis/mutation/use-send-otp";

function OtpVerificationStep() {
  const { setStep } = useStep();
  const { secondsLeft, isFinished, restart } = useCountdown(60);
  const { mutate: sendOtp } = useSendOtp();
  const { mutate: verifyOtp, isPending, error } = useVerifyOtp();
  const { getValues } = useFormContext<IRegisterFormValues>();
  const email = getValues("email");
  type IotpCodeFormValues = z.infer<typeof OtpSchema>;
  const { handleSubmit, formState, control } = useForm<IotpCodeFormValues>({
    defaultValues: {
      code: "",
    },
    resolver: zodResolver(OtpSchema),
  });
  // functions
  const onSubmit: SubmitHandler<IotpCodeFormValues> = (data) => {
    verifyOtp(
      { email, code: data.code },
      {
        onSuccess: () => {
          setStep(RegisterSteps.INFORMATION);
        },
      },
    );
  };
  function handleResendOtp() {
    sendOtp(email, {
      onSuccess: () => {
        restart();
      },
    });
  }
  return (
    <div>
      {/* Verify Otp  */}
      <div className="max-w-113 max-h-20.5">
        {/* heading */}
        <Heading className=" text-2xl text-blue-600 ">Verify OTP</Heading>
        {/*  enter code   */}
        <p className="w-full text-base ">
          <span className={"text-gray-500  "}>
            Please enter the 6-digits code we have sent to:
          </span>{" "}
          <br />
          {getValues("email")}.{" "}
          <Button
            onClick={() => setStep(RegisterSteps.EMAIL)}
            variant="link"
            className={"underline  decoration-blue-600"}
          >
            Edit
          </Button>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6.5">
          <div className="flex justify-center">
            <Controller
              control={control}
              name="code"
              render={({ field }) => (
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup className="gap-4">
                    <InputOTPSlot
                      index={0}
                      className="  size-12 rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100  "
                    />
                    <InputOTPSlot
                      index={1}
                      className="  size-12
  rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100"
                    />
                    <InputOTPSlot
                      index={2}
                      className="  size-12
  rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100"
                    />
                    <InputOTPSlot
                      index={3}
                      className="  size-12
  rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100"
                    />
                    <InputOTPSlot
                      index={4}
                      className="  size-12
  rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100"
                    />
                    <InputOTPSlot
                      index={5}
                      className="  size-12
  rounded-none
  border-gray-300
  shadow-none
  outline-none
  ring-0
  data-[active=true]:border-blue-600
  data-[active=true]:ring-2
  data-[active=true]:ring-blue-100"
                    />
                  </InputOTPGroup>
                </InputOTP>
              )}
            />
          </div>
          {!isFinished ? (
            <p className="mt-6 mb-10 text-center text-gray-500">
              You can request another code in:{" "}
              <span className="text-blue-600">{secondsLeft}</span> s
            </p>
          ) : (
            <div className="mt-6 mb-10  flex justify-center">
              <Button
                type="button"
                variant="outline"
                size="xs"
                onClick={handleResendOtp}
              >
                <RefreshCwIcon />
                Resend Code
              </Button>
            </div>
          )}

          {error && <FeedBack>{error.message}</FeedBack>}

          <Button
            isloading={isPending}
            disabled={formState.isSubmitted && !formState.isValid}
            variant={"outline"}
            type="submit"
            className={"w-full "}
          >
            Verify Code
          </Button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerificationStep;
