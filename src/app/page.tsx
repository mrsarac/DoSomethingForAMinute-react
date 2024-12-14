'use client'

import React from 'react';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="mb-8 text-2xl font-serif">
        Do Something For A Minute
      </h1>
      <div className="-mt-12">
        <CountdownTimer />
      </div>
    </div>
  );
}
