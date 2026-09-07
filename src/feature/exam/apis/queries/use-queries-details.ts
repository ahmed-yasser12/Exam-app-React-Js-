import { useQuery } from "@tanstack/react-query";
import { getExamQuestionsApi } from "../exam-api";

export function useExamQuestions(examId: string) {
  return useQuery({
    queryKey: ["exam-details", examId],
    queryFn: () => getExamQuestionsApi(examId),
    enabled: Boolean(examId),
  });
}