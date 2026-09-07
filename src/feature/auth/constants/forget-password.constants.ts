export const ForgetPasswordSteps = {
  EMAIL: "email",
  OTP: "otp",
  PASSWORD: "password",
} as const;

export const ForgetPasswordStepIndex = {
  [ForgetPasswordSteps.EMAIL]: 0,
  [ForgetPasswordSteps.OTP]: 1,
  [ForgetPasswordSteps.PASSWORD]: 2,
} as const;

export const TOTAL_FORGET_PASSWORD_STEPS = 3;

export type IForgetPasswordStep =
  (typeof ForgetPasswordSteps)[keyof typeof ForgetPasswordSteps];