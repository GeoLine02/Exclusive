import { useCallback, useEffect, useState } from "react";
import { TimeLeftType } from "../../types/index";
type TimerProps = {
  expirationDate: Date;
};

const Timer = ({ expirationDate }: TimerProps) => {
  const calculateTimeLeft = useCallback((): TimeLeftType => {
    const now = new Date().getTime();
    const difference = expirationDate.getTime() - now;

    if (difference <= 0) {
      // Timer has expired
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [expirationDate]);

  const [timeLeft, SetTimeLeft] = useState<TimeLeftType>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      SetTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [expirationDate, calculateTimeLeft]);
  return (
    <div className="flex w-fit items-end gap-2 p-2 bg-[#DB4444] text-white rounded-md">
      <div>
        <span className="text-xs font-medium">Days</span>
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-medium">{`${timeLeft.days}`}</h3>
          <h3 className="text-3xl">:</h3>
        </div>
      </div>
      <div>
        <span className="text-xs font-medium">hours</span>
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-medium">{`${timeLeft.hours}`}</h3>
          <h3 className="text-3xl">:</h3>
        </div>
      </div>
      <div>
        <span className="text-xs font-medium">minutes</span>
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-medium">{`${timeLeft.minutes}`}</h3>
          <h3 className="text-3xl">:</h3>
        </div>
      </div>
      <div>
        <span className="text-xs font-medium">secondes</span>
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-medium">{`${timeLeft.seconds}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Timer;
