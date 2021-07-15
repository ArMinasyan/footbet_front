import React from 'react';
import { useTimer } from 'react-timer-hook';

export function Timer({ expiryTimestamp, timeClass }) {
    const {
        seconds,
        minutes,
        hours,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div className={timeClass}>
            <div>
                <span>
                    {hours < 10 ? "0" + hours : hours}
                </span>
                :
                <span>
                    {minutes < 10 ? "0" + minutes : minutes}
                </span>
                :
                <span>
                    {seconds < 10 ? "0" + seconds : seconds}
                </span>
            </div>
        </div>
    );
}