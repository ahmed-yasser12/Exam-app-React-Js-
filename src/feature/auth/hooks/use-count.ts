import { useEffect, useState } from "react";

export function useCountdown(initialSeconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((previousSeconds) => previousSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  function restart() {
    setSecondsLeft(initialSeconds);
  }

  return {
    secondsLeft,
    isFinished: secondsLeft === 0,
    restart,
  };
}