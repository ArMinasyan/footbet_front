import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export function Timer({ expiryTimestamp, timeClass, timeOut }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => timeOut(),
  });
  useEffect(()=>{
    if ( !(seconds + minutes + hours + days)  )
    timeOut();
  }, [seconds, minutes, hours, days, timeOut]);

  const h = ((days * 24) + hours + "").padStart(2, "0");
  return (
    <div className={timeClass}>
      <div>
        <span>
          {h}
        </span>
        :<span>{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
        <span style={{display:"block"}}>МСК</span>
      </div>
    </div>
  );
}
