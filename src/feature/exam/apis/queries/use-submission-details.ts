import { useQuery } from "@tanstack/react-query";
import { getSubmissionDetailsApi } from "../exam-api";

export function useSubmissionDetails(submissionId: string) {
  return useQuery({
    queryKey: ["submission", submissionId],
    queryFn: () => getSubmissionDetailsApi(submissionId),
    enabled: Boolean(submissionId),
  });
}