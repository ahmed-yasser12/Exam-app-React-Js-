import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { resetPasswordApi } from "../auth-api";
import { toast } from "@/components/Ui/toast";
import type { IResetPasswordResquest } from "../../types/reset-password";
export function UseResetPassword() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn:(values: IResetPasswordResquest) =>
  resetPasswordApi(values) ,
    onSuccess: () => {
        toast.add({
            type:"success",
            description:"Password reset successfully"
        })
      navigate("/login");
    },onError:(err)=>{
      console.log(err);
       toast.add({
            type:"error",
            description:`${err}`
        })
    }
  });
}
