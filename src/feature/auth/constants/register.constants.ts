export const RegisterSteps = {
  EMAIL: "email",
  OTP_VERIFICATION: "otp-verification",
  INFORMATION: "information",
  PASSWORD: "password",
} as const;

export const RegisterStepIndex = {
  [RegisterSteps.EMAIL]: 0,
  [RegisterSteps.OTP_VERIFICATION]: 1,
  [RegisterSteps.INFORMATION]: 2,
  [RegisterSteps.PASSWORD]: 3,
} as const;

export const TOTAL_REGISTER_STEPS = 4;