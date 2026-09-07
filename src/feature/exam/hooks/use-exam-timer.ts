import { useEffect, useState } from "react";

function useExamTimer(durationInMinutes: number) {
  const [remainingSeconds, setRemainingSeconds] = useState(
    durationInMinutes * 60,
  );

  useEffect(() => {
    if (remainingSeconds <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, [remainingSeconds]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return {
    minutes,
    seconds,
    remainingSeconds,
  };
}

export default useExamTimer;