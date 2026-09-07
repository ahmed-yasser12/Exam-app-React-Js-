import { RotateCcw, MoveRight } from "lucide-react";
import { Link } from "react-router";

interface ExamResultActionsProps {
  examId: string;
//   diplomaId: string;
}

function ExamResultActions({
  examId,
}: ExamResultActionsProps) {
  return (
    <div className="mt-8 flex gap-3">
      <Link
        to={`/exams/${examId}`}
        className="
          flex flex-1 items-center justify-center gap-2
          bg-gray-200 px-6 py-3 text-gray-700
          transition-colors hover:bg-gray-300
        "
      >
        <RotateCcw className="size-5" />
        Restart
      </Link>

      <Link
        to={`/diplomas`}
        className="
          flex flex-1 items-center justify-center gap-2
          bg-blue-600 px-6 py-3 text-white
          transition-colors hover:bg-blue-700
        "
      >
        Explore
        <MoveRight className="size-5" />
      </Link>
    </div>
  );
}

export default ExamResultActions;