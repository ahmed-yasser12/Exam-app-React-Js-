import { Clock3, CircleHelp, MoveRight } from "lucide-react";
import { Link } from "react-router";
import type { IDiplomaExam } from "@/feature/diploma/types/diploma";

interface ExamCardProps {
  exam: IDiplomaExam;
}

function ExamCard({ exam }: ExamCardProps) {
  return (
    <article
      className="
        group flex gap-4 border border-dashed border-blue-200
        bg-blue-50 p-4 transition-colors
        hover:bg-blue-100
      "
    >
      {/* Exam Image */}
      <div className="size-24.5 shrink-0  border border-blue-200 bg-white p-2">
        <img
          src={exam.image}
          alt={exam.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Exam Content */}
      <div className="w-full ">
        <div className="flex items-center  justify-between gap-4">
          <h2 className=" text-lg font-semibold text-blue-600">{exam.title}</h2>

          <div className="flex  items-center   gap-3 text-sm text-gray-700">
            <span className="flex items-center gap-1">
              <CircleHelp className="size-4" />
              {exam.questionsCount} Questions
            </span>

            <span className="flex items-center gap-1">
              <Clock3 className="size-4" />
              {exam.duration} minutes
            </span>
          </div>
        </div>

        <p className="mt-1 line-clamp-4 text-sm text-gray-500">
          {exam.description}
        </p>
          {/* Start Button */}
        <div className="flex justify-end">
          <Link
            to={`/exams/${exam.id}`}
            className="
            invisible translate-x-2 bg-blue-600 px-6 py-2
            text-sm font-medium text-white opacity-0
            transition-all duration-300
            group-hover:visible group-hover:translate-x-0
            group-hover:opacity-100
            hover:bg-blue-700 flex gap-1
          "
          >
            START <MoveRight />
          </Link>
        </div>
      </div>
      
    </article>
  );
}

export default ExamCard;
