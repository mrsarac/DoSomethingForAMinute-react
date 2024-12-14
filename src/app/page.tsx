'use client'

import React from 'react';
import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (seconds <= 0) return // Stop when we reach 0
    
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds])

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0')
    const seconds = (totalSeconds % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="mb-8 text-2xl font-serif">
        Do Something For A Minute
      </h1>
      <div className="-mt-12 min-w-[100px] text-center inline-block text-[14rem] leading-none tracking-wider font-serif">
        {formatTime(seconds)}
      </div>
    </div>
  )
}
