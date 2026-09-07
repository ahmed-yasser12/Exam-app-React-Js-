export interface IDiploma {
  id: string;
  title: string ;
  description: string | null ;
  image: string | null;
}
export interface IDiplomaMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IDiplomaResponse {
  status: boolean;
  code: number;
  payload: {
    data: IDiploma[];
    metadata: IDiplomaMetadata;
  };
}
export interface IDiplomaSearchParams {
  page: number;
  limit: number;
}
export interface IDiplomaExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  questionsCount: number;
  createdAt: string;
}
export interface IDiplomaDetails {
  id: string;
  title: string;
  description: string;
  image: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  exams: IDiplomaExam[];
}

export interface IDiplomaDetailsResponse {
  status: boolean;
  code: number;
  payload: {
    diploma: IDiplomaDetails;
  };
}