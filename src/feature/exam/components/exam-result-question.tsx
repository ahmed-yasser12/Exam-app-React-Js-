import type { ISubmissionAnalytics } from "../types/submissionDetails";

interface ExamResultQuestionProps {
  question: ISubmissionAnalytics;
}

function ExamResultQuestion({ question }: ExamResultQuestionProps) {
  return (
    <article className="space-y-3 font-mono">
      {/* Question Title */}
      <h3 className="text-lg font-bold text-blue-600">
        {question.questionText}
      </h3>

      <div className="space-y-2">
        {/* If Selected Answer is Incorrect */}
        {!question.isCorrect && (
          <div className="flex items-center gap-3 rounded-xs bg-red-100/70 p-3.5 text-gray-800">
            <div className="flex size-5 items-center justify-center rounded-full border-2 border-red-500 bg-white">
              <div className="size-2.5 rounded-full bg-red-500" />
            </div>
            <span className="text-sm font-medium">
              {question.selectedAnswer?.text}
            </span>
          </div>
        )}

        {/* Correct Answer Box */}
        <div className="flex items-center gap-3 rounded-xs bg-emerald-100/60 p-3.5 text-gray-800">
          <div className="flex size-5 items-center justify-center rounded-full border-2 border-emerald-500 bg-white">
            {/* If user picked this correctly show filled dot, else empty outline */}
            {question.isCorrect && (
              <div className="size-2.5 rounded-full bg-emerald-500" />
            )}
          </div>
          <span className="text-sm font-medium">
            {question.correctAnswer?.text}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ExamResultQuestion;