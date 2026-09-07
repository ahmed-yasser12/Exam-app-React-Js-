interface ExamTimerProps {
  remainingSeconds: number;
  durationInMinutes: number;
}

function ExamTimer({ remainingSeconds, durationInMinutes }: ExamTimerProps) {
  const totalSeconds = Number(durationInMinutes) * 60;

  const progress = (remainingSeconds / totalSeconds) * 100;

  return (
    <div className="relative size-14 shrink-0">
      <svg className="size-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-blue-100"
        />

        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          className="text-blue-600 transition-all duration-1000"
          strokeDasharray={264}
          strokeDashoffset={264 - (264 * progress) / 100}
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">
        {String(Math.floor(remainingSeconds / 60)).padStart(2, "0")}:
        {String(remainingSeconds % 60).padStart(2, "0")}
      </span>
    </div>
  );
}

export default ExamTimer;
