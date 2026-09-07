import { useQuery } from "@tanstack/react-query";
import {  getDetailsExamApi } from "../exam-api";

export function useDetailsExam(examId: string) {
  return useQuery({
    queryKey: ["All Exams"],
    queryFn: () => getDetailsExamApi(examId),
     enabled: Boolean(examId),
  });
}
