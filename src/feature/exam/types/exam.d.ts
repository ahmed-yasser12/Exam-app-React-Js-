export interface IExamAnswer {
  id: string;
  text: string;
}

export interface IExamQuestion {
  id: string;
  text: string;
  examId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  answers: IExamAnswer[];
}

export interface IExamQuestionsResponse {
  status: boolean;
  code: number;
  payload: {
    questions: IExamQuestion[];
  };
}

export interface IAllExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  questionsCount: number;
  diplomaId: string;
  diploma: {
    description: string;
    id: string;
    image: string;
    title: string;
  };

  immutable: true;
  createdAt: string;
  updatedAt: string;
}
export interface IExamMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
export interface IAllExamResponse {
  status: boolean;
  code: number;
  payload: {
    exam: IAllExam;
  };
  metadata: IExamMetadata;
}
export interface ISubmitExamAnswer {
  questionId: string;
  answerId: string;
}

export interface ISubmitExamRequest {
  examId: string;
  answers: ISubmitExamAnswer[];
  startedAt: string;
}