import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../auth-api";
import type { ILoginFormValues } from "../../types/login";
import { useNavigate } from "react-router";
import useToken from "../../hooks/use-token";
export function useLogin() {
  const { setToken } = useToken();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (values: ILoginFormValues) => loginApi(values),
    onSuccess: (res) => {
      setToken(res.payload.token);
      navigate("/diplomas");
    },
  });
}
