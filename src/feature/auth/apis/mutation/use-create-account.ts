import { useMutation } from "@tanstack/react-query";
import { creatAccountApi } from "../auth-api";
import { toast } from "@/components/Ui/toast";
import { useNavigate } from "react-router";
export function useCreatAccount() {
  const navigate= useNavigate()
  return useMutation({
    mutationFn: creatAccountApi,
    onSuccess:()=>{
      toast.add({
         type: "success",
         description: "Event has been created.",
      });
      navigate("/login")
    }
})}
