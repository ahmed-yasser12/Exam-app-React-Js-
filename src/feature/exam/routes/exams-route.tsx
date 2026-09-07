import type { RouteObject } from "react-router";
import ExamPage from "./ExamPage";
import ExamQuestionsPage from "./ExamQuestionsPage";
import { ExamResultsPage } from "./ExamResultsPage";

export const examsRoutes: RouteObject[] = [
  {
    path: "diplomas/:diplomaId",
    element: <ExamPage />,
  },
   {
    // /exams/${exam.id}
    path: "exams/:examsId",
    element: <ExamQuestionsPage/>,
  },
  {
  path: "results/:submissionId",
  element: <ExamResultsPage />,
}
];
