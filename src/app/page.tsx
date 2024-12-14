"use client";

import React, { useState, useEffect } from "react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LoadingDots } from "@/components/LoadingDots";
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
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-serif">Do Something For A Minute</h1>
          <p className="mt-2 text-gray-600">
            A simple timer to help you focus for one minute
          </p>
        </header>
        <section className="-mt-12" aria-label="Timer Section">
          <CountdownTimer key={resetKey} onTimerUpdate={handleTimerUpdate} />
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-serif">Do Something For A Minute</h1>
        <p className="mt-2 text-gray-600">
          A simple timer to help you focus for one minute
        </p>
      </header>
      <section className="-mt-12" aria-label="Timer Section">
        <CountdownTimer key={resetKey} onTimerUpdate={handleTimerUpdate} />
      </section>
      <footer className="mt-8 text-sm text-gray-500">
        {currentSeconds === 0 ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Do Something For A Minute
          </button>
        ) : (
          <LoadingDots />
        )}
      </footer>
    </main>
  );
}
