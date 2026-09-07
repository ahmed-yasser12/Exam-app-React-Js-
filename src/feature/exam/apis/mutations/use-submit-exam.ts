import { useMutation } from "@tanstack/react-query";
import { submitExamApi } from "../exam-api";

export function useSubmitExam() {
  return useMutation({
    mutationFn: submitExamApi,
  });
}