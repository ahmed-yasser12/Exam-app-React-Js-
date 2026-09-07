import { api } from "@/shared/lib/axios";
import type {
  IAllExamResponse,
  IExamQuestionsResponse,
  ISubmitExamRequest,
} from "../types/exam";
import { getToken } from "@/feature/auth/apis/utils/token-utils";
import type { ISubmitExamResponse } from "../types/ExamSubmission";
import type { ISubmissionDetailsResponse } from "../types/submissionDetails";
const token = getToken();
const QUESTION_ENDPOINT = "questions";
const SUBMIT_EXAM_ENDPOINT = "submissions";
export async function getExamQuestionsApi(
  examId: string,
): Promise<IExamQuestionsResponse> {
  const response = await api.get<IExamQuestionsResponse>(
    `${QUESTION_ENDPOINT}/exam/${examId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
export async function getAllExamApi(): Promise<IAllExamResponse> {
  const response = await api.get<IAllExamResponse>(
    `${QUESTION_ENDPOINT}/exams`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
export async function getDetailsExamApi(
  examId: string,
): Promise<IAllExamResponse> {
  const response = await api.get<IAllExamResponse>(`/exams/${examId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
export async function submitExamApi(
  examSubmission: ISubmitExamRequest,
): Promise<ISubmitExamResponse> {
  const response = await api.post<ISubmitExamResponse>(
    SUBMIT_EXAM_ENDPOINT,
    examSubmission,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}
export async function getSubmissionDetailsApi(
  submissionId: string,
): Promise<ISubmissionDetailsResponse> {
  const response = await api.get<ISubmissionDetailsResponse>(
    `/submissions/${submissionId}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(response.data);
  return response.data;
}