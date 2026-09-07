import { useParams } from "react-router";
import { useSubmissionDetails } from "../apis/queries/use-submission-details";
import ExamResultChart from "../components/exam-result-chart";
import ExamResultQuestion from "../components/exam-result-question";
import ExamResultActions from "../components/exam-result-actions";
import Heading from "@/feature/auth/shared/components/heading";
import { CircleQuestionMark, Loader2 } from "lucide-react";

export function ExamResultsPage() {
  const { submissionId } = useParams();
  const { data, isPending, error } = useSubmissionDetails(submissionId!);

  if (isPending) {
    return <div className="flex h-[500px] w-full flex-col items-center justify-center gap-3 font-mono text-blue-600">
      <Loader2 className="size-10 animate-spin text-blue-600" />
    </div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500 font-mono">{error.message}</div>;
  }

  const { submission, analytics } = data.payload;

  return (
    <main className="mx-auto max-w-6xl space-y-6 p-6 font-mono">
      {/* Header Title */}
         <Heading className="flex items-center gap-1 bg-blue-600 py-5 text-3xl text-white">
            <CircleQuestionMark className="ms-4 size-11" />
            Diplomas
          </Heading>
      <h1 className="text-3xl font-extrabold text-blue-600">Results:</h1>

      {/* Main Layout Container */}
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
        
        {/* Left : Chart Side  */}
        <div className="flex h-130 w-full shrink-0 flex-col items-center justify-center rounded-sm border border-blue-100 bg-[#EEF5FF] p-6 md:w-[275px]">
          <ExamResultChart
            correctAnswers={submission.correctAnswers}
            wrongAnswers={submission.wrongAnswers}
            totalQuestions={submission.totalQuestions}
          />
        </div>

        {/* Right : Questions Side  */}
        <div className="h-130 flex-1 overflow-y-auto space-y-6 rounded-sm border border-dashed border-blue-200 p-5 pr-3">
          {analytics.map((question) => (
            <ExamResultQuestion key={question.questionId} question={question} />
          ))}
        </div>

      </div>

      {/* Action Buttons */}
      <ExamResultActions examId={submission.examId} />
    </main>
  );
}