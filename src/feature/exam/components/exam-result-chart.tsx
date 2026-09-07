interface ExamResultChartProps {
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
}

function ExamResultChart({
  correctAnswers,
  wrongAnswers,
  totalQuestions,
}: ExamResultChartProps) {
  const correctPercentage =
    totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Donut Chart Ring */}
      <div
        className="relative flex size-48 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(
            #00C853 ${correctPercentage}%, 
            #FF3D57 ${correctPercentage}% 100%
          )`,
        }}
      >
        {/* Inner Circle cutout matching background */}
        <div className="size-28 rounded-full bg-[#EEF5FF]" />
      </div>

      {/* Legend below chart */}
      <div className="mt-8 space-y-2 text-base font-bold text-gray-800 self-start ps-4">
        <div className="flex items-center gap-3">
          <span className="size-4 rounded-xs bg-[#00C853]" />
          <span>Correct: {correctAnswers}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="size-4 rounded-xs bg-[#FF3D57]" />
          <span>Incorrect: {wrongAnswers}</span>
        </div>
      </div>
    </div>
  );
}

export default ExamResultChart;