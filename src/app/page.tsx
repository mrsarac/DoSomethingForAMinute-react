'use client'

import React from 'react';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <header className="text-center mb-8">
        <h1 className="text-2xl font-serif">
          Do Something For A Minute
        </h1>
        <p className="mt-2 text-gray-600">
          A simple timer to help you focus for one minute
        </p>
      </header>
      <section className="-mt-12" aria-label="Timer Section">
        <CountdownTimer />
      </section>
      <footer className="mt-8 text-sm text-gray-500">
        <p>Created by Mustafa Saraç</p>
      </footer>
    </main>
  );
}
