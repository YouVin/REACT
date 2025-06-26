import { createContext } from "react";

interface CounterContextType {
  count: number;
  countUp: (step: number) => void;
}

// 1. Context 생성
export const CounterContext = createContext<CounterContextType>({
  count: 5,
  countUp: () => {},
});
