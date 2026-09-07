import { useQuery } from "@tanstack/react-query";
import { getAllExamApi } from "../exam-api";

export function useAllExam() {
  return useQuery({
    queryKey: ["All Exams"],
    queryFn: () => getAllExamApi(),
  });
}
