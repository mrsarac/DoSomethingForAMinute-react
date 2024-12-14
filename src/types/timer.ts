export interface TimerProps {
  initialSeconds?: number;
  onComplete?: () => void;
}

export interface TimeFormat {
  minutes: string;
  seconds: string;
}
