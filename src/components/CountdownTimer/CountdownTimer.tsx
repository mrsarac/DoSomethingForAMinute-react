'use client'

import React, { useState, useEffect } from 'react';
import { TimerProps } from '@/types/timer';
import { formatTime } from '@/utils/timeFormatter';
import { TIMER_CONFIG } from '@/constants/timer';

export const CountdownTimer: React.FC<TimerProps> = ({
  initialSeconds = TIMER_CONFIG.DEFAULT_SECONDS,
  onComplete
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= TIMER_CONFIG.MIN_SECONDS) {
      onComplete?.();
      return;
    }
    
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, TIMER_CONFIG.UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [seconds, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[100px] text-center inline-block text-[14rem] leading-none tracking-wider font-serif">
        {formatTime(seconds)}
      </div>
    </div>
  );
};
