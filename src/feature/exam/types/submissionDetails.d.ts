export interface ISubmissionAnswer {
  id: string;
  text: string;
}

export interface ISubmissionAnalytics {
  questionId: string;
  questionText: string;
  selectedAnswer: ISubmissionAnswer;
  isCorrect: boolean;
  correctAnswer: ISubmissionAnswer;
}

export interface ISubmissionDetailsResponse {
  status: boolean;
  code: number;
  payload: {
    submission: ISubmission;
    analytics: ISubmissionAnalytics[];
  };
}