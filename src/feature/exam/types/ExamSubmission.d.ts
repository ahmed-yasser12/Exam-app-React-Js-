export interface IExamSubmission {
  id: string;
  userId: string;
  examId: string;
  examTitle: string;
  exam: {
    id: string;
    title: string;
    duration: number;
  };
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  startedAt: string;
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface IExamAnalytics {
  questionId: string;
  questionText: string;
  selectedAnswer: unknown;
  isCorrect: boolean;
  correctAnswer: unknown;
}

export interface ISubmitExamResponse {
  status: boolean;
  code: number;
  payload: {
    submission: IExamSubmission;
    analytics: IExamAnalytics[];
  };
}