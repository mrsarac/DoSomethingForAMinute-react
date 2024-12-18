'use client'

import React, { useState, useEffect } from 'react';
import { TimerProps } from '@/types/timer';
import { formatTime } from '@/utils/timeFormatter';
import { TIMER_CONFIG } from '@/constants/timer';

export const CountdownTimer: React.FC<TimerProps & { onTimerUpdate?: (seconds: number) => void }> = ({
  initialSeconds = TIMER_CONFIG.DEFAULT_SECONDS,
  onComplete,
  onTimerUpdate
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isClient, setIsClient] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [showSpeedMessage, setShowSpeedMessage] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsSpacePressed(true);
        setShowSpeedMessage(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        setIsSpacePressed(false);
        setShowSpeedMessage(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (seconds <= TIMER_CONFIG.MIN_SECONDS) {
      onComplete?.();
      onTimerUpdate?.(seconds);
      return;
    }

    const interval = isSpacePressed
      ? TIMER_CONFIG.UPDATE_INTERVAL / 3
      : TIMER_CONFIG.UPDATE_INTERVAL;

    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds - 1;
        onTimerUpdate?.(newSeconds);
        return newSeconds;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isClient, seconds, onComplete, onTimerUpdate, isSpacePressed]);

  const timerDisplay = formatTime(seconds);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[80px] sm:min-w-[100px] text-center inline-block text-7xl sm:text-8xl md:text-9xl lg:text-[14rem] leading-none tracking-wider font-serif">
        {timerDisplay}
      </div>
      {showSpeedMessage && (
        <div className="mt-4 text-lg text-red-500">
          Zaman hızlandırılıyor
        </div>
      )}
    </div>
  );
};
