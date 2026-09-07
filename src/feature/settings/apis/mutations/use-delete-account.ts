import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "@/components/Ui/toast";

export function useDeleteAccount() {
  const navigate = useNavigate();

  return useMutation({
    // اعمله بكرهdeleteAccountApi 
    mutationFn: () => deleteAccountApi,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Account deleted successfully.",
      });
      localStorage.clear();
      navigate("/login");
    },
    onError: (error: Error) => {
      toast.add({
        type: "error",
        description: error.message,
      });
    },
  });
}
