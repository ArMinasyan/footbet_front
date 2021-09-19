import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export function Timer({ expiryTimestamp, timeClass, timeOut }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => timeOut(),
  });
  useEffect(()=>{
    if ( (seconds + minutes + hours + days) === 0 )
    timeOut();
  }, [seconds, minutes, hours, days, timeOut]);
  return (
    <div className={timeClass}>
      <div>
        <span>
          {hours < 10 ? "0" + hours : days ? (days * 24) + hours : hours}
        </span>
        :<span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
        <span style={{display:"block"}}>МСК</span>
      </div>
    </div>
  );
}
