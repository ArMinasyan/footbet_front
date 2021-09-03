import React from "react";
import { useTimer } from "react-timer-hook";

export function Timer({ expiryTimestamp, timeClass, timeOut }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => timeOut(),
  });
  return (
    <div className={timeClass}>
      <div>
        <span>
          {hours < 10 ? "0" + hours : days ? (days * 24) + hours : hours}
        </span>
        :<span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
    </div>
  );
}
