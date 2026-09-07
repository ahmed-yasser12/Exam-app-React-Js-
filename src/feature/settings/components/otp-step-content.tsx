import { Button } from "@/components/Ui/button/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/Ui/input-otp";
import { useSendOtp } from "@/feature/auth/apis/mutation/use-send-otp";
import { useCountdown } from "@/feature/auth/hooks/use-count";
import { OtpSchema } from "@/feature/auth/schemas/otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCwIcon } from "lucide-react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { useConfirmEmailChange } from "../apis/mutations/use-confirm-email";
import FeedBack from "@/shared/components/feedBack";
import { toast } from "@/components/Ui/toast";

interface OtpStepContentProps {
  email: string;
  onEdit: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export function OtpStepContent({ email, onEdit }: OtpStepContentProps) {
  const { secondsLeft, isFinished, restart } = useCountdown(60);
  const { mutate: sendOtp } = useSendOtp();
  const { mutate: verifyOtp, isPending, error } = useConfirmEmailChange();
  type IotpCodeFormValues = z.infer<typeof OtpSchema>;
  const { handleSubmit, formState, control } = useForm<IotpCodeFormValues>({
    defaultValues: {
      code: "",
    },
    resolver: zodResolver(OtpSchema),
  });
  // functions
  const handleResendOtp = () => {
    sendOtp(email, {
      onSuccess: () => {
        restart();
      },
    });
  };
  const onSubmit: SubmitHandler<IotpCodeFormValues> = (data) => {
    verifyOtp(
      { code: data.code },
      {
        onSuccess: () => {
          toast.add({
            type: "success",
            description: " Code is verified successfully",
          });
        },
      },
    );
  };

  return (
    <div className="px-6 pb-6">
      <h2 className="text-xl font-bold text-blue-600">Verify OTP</h2>

      <p className="mt-2 text-sm text-gray-500">
        Please enter the 6-digits code we have sent to:
      </p>

      <div className="text-sm text-gray-700">
        {email}
        <button
          type="button"
          onClick={onEdit}
          className="ml-1 text-blue-600 underline"
        >
          Edit
        </button>
      </div>

      {/* OTP inputs هنضيفها هنا */}

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
  );
}
