import { createContext, useState } from "react";

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
  reset: () => void;
  countDown: (step: number) => void;
}

const CounterContext = createContext<CounterContextType>({
  count: 6,
  countUp: () => {},
  reset: () => {},
  countDown: () => {},
});

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(3);

  const countUp = (step: number) => {
    setCount(count + step);
  };
  const reset = () => {
    setCount(0);
  };
  const countDown = (step: number) => {
    setCount(count - step);
  };

  const value = { count, countUp, reset, countDown };

  return <CounterContext value={value}>{children}</CounterContext>;
}

export default CounterContext;
