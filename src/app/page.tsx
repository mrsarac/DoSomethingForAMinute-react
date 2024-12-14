"use client";

import React, { useState, useEffect } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { TIMER_CONFIG } from "@/constants/timer";

export default function Home() {
  const [resetKey, setResetKey] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState<number>(
    TIMER_CONFIG.DEFAULT_SECONDS
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setCurrentSeconds(TIMER_CONFIG.DEFAULT_SECONDS);
  };

  const handleTimerUpdate = (seconds: number) => {
    setCurrentSeconds(seconds);
  };

  if (!mounted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif">Do Something For A Minute</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            A simple timer to help you focus for one minute
          </p>
        </header>
        <section className="-mt-8 sm:-mt-12" aria-label="Timer Section">
          <CountdownTimer key={resetKey} onTimerUpdate={handleTimerUpdate} />
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4">
      <header className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif">Do Something For A Minute</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          A simple timer to help you focus for one minute
        </p>
      </header>
      <section className="-mt-8 sm:-mt-12" aria-label="Timer Section">
        <CountdownTimer key={resetKey} onTimerUpdate={handleTimerUpdate} />
      </section>
      <footer className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
        {currentSeconds === 0 ? (
          <button
            onClick={handleReset}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm sm:text-base"
          >
            Do Something For A Minute
          </button>
        ) : (
          <></>
        )}
      </footer>
    </main>
  );
}
