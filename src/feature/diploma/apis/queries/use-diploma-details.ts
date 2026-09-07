import { useQuery } from "@tanstack/react-query";
import { getDiplomaDetailsApi } from "../diploma-api";
export function useDiplomaDetails(diplomaId: string) {
  return useQuery({
    queryKey: ["diploma", diplomaId],
    queryFn: () => getDiplomaDetailsApi(diplomaId),
    enabled: Boolean(diplomaId),
  });
}