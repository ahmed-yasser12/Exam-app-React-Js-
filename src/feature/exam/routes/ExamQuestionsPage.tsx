import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useExamQuestions } from "../apis/queries/use-queries-details";
import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/Ui/breadcrumb";
import { useDetailsExam } from "../apis/queries/use-details-exam";
import { Progress } from "@/components/Ui/progress";
import useExamTimer from "../hooks/use-exam-timer";
import ExamTimer from "../components/exam-timer";
import { useSubmitExam } from "../apis/mutations/use-submit-exam";

function ExamQuestionsPage() {
  const { examsId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [startedAt] = useState(() => new Date().toISOString());
  const { mutate: submitExam, isPending: isSubmitting } = useSubmitExam();
  const { data, isPending, error } = useExamQuestions(examsId!);
  const {
    data: examDetails,
    isPending: isExamDetailsPending,
    error: examDetailsError,
  } = useDetailsExam(examsId!);

  const { remainingSeconds } = useExamTimer(
    examDetails?.payload.exam.duration as number,
  );
  // console.log(minutes ,seconds , remainingSeconds);
  if (isPending || isExamDetailsPending) {
    return <div className="flex h-[500px] w-full flex-col items-center justify-center gap-3 font-mono text-blue-600">
      <Loader2 className="size-10 animate-spin text-blue-600" />
    </div>;;
  }

  if (error || examDetailsError) {
    return <div>{error?.message ?? examDetailsError?.message}</div>;
  }
  const exam = examDetails.payload.exam;
  const questions = data.payload.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const progressValue = (questionNumber / questions.length) * 100;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  function handleSubmitExam() {
    const answers = Object.entries(selectedAnswers).map(
      ([questionId, answerId]) => ({
        questionId,
        answerId,
      }),
    );

     submitExam(
    {
      examId: exam.id,
      answers,
      startedAt,
    },  {
      onSuccess: (response) => {
        const submissionId = response.payload.submission.id;

        navigate(`/results/${submissionId}`);
      },
    },
  );
  }
  function handleNextQuestion() {
    if (isLastQuestion) {
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
    setSelectedAnswerId(null);
  }

  function handlePreviousQuestion() {
    if (isFirstQuestion) {
      return;
    }

    setCurrentQuestionIndex((index) => index - 1);
    setSelectedAnswerId(null);
  }

  return (
    <>
      <Breadcrumb className="p-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/diplomas">Diplomas</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {examDetails?.payload.exam.diploma.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Exams</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="p-6">
        {/* progress */}
        <div className="mb-6 flex items-center gap-5">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-mono text-gray-600">{exam.title}</span>

              <span className="text-gray-500">
                Question {questionNumber} of {questions.length}
              </span>
            </div>

            <Progress value={progressValue} />
          </div>

          <ExamTimer
            remainingSeconds={remainingSeconds}
            durationInMinutes={exam.duration}
          />
        </div>
        {/* questions */}
        <h1 className="text-2xl text-blue-600 font-mono font-semibold mb-6">
          {currentQuestion?.text}
        </h1>
        {/* Answers */}
        <div className="flex flex-col gap-2">
          {currentQuestion?.answers.map((answer) => (
            <label
              key={answer.id}
              className={`
        flex cursor-pointer items-center gap-3
        bg-gray-50 p-3 transition-colors
        hover:bg-gray-100
        ${selectedAnswerId === answer.id ? "bg-blue-50" : ""}
      `}
            >
              <input
                type="radio"
                name={currentQuestion.id}
                value={answer.id}
                checked={selectedAnswers[currentQuestion.id] === answer.id}
                onChange={() =>
                  setSelectedAnswers((answers) => ({
                    ...answers,
                    [currentQuestion.id]: answer.id,
                  }))
                }
                className="size-4 accent-blue-600"
              />

              <span className="text-sm text-gray-700">{answer.text}</span>
            </label>
          ))}
        </div>
        {/* buttons */}
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            disabled={isFirstQuestion}
            onClick={handlePreviousQuestion}
            className="
      flex flex-1 cursor-pointer items-center
      justify-center gap-1 bg-gray-200 px-6 py-3
      text-gray-500 transition-colors
      hover:bg-gray-300
      disabled:cursor-not-allowed disabled:opacity-50
    "
          >
            <MoveLeft />
            Previous
          </button>

          {isLastQuestion ? (
            <button
              type="button"
              onClick={handleSubmitExam}
              disabled={isSubmitting}
              className="
      flex flex-1 cursor-pointer items-center
      justify-center gap-1 bg-green-600 px-6 py-3
      text-white transition-colors
      hover:bg-green-700
      disabled:cursor-not-allowed disabled:opacity-50
    "
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextQuestion}
              className="
      flex flex-1 cursor-pointer items-center
      justify-center gap-1 bg-blue-600 px-6 py-3
      text-white transition-colors
      hover:bg-blue-700
    "
            >
              Next
              <MoveRight />
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default ExamQuestionsPage;
