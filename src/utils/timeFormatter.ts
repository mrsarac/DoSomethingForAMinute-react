export const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export const splitTime = (totalSeconds: number) => {
  return {
    minutes: Math.floor(totalSeconds / 60).toString().padStart(2, '0'),
    seconds: (totalSeconds % 60).toString().padStart(2, '0')
  };
};
