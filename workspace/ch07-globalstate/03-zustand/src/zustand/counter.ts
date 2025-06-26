import { create } from "zustand";

interface CounterSate {
  count: number;
  countReset: () => void;
  countDown: (step: number) => void;
  countUp: (step: number) => void;
  getCount: () => void;
}

const useCounterStore = create<CounterSate>((set, get) => ({
  count: 5,
  countReset() {
    set({ count: 0 });
  },
  countDown: (step) => {
    set({ count: get().count - step });
  },
  countUp: (step) => {
    set({ count: get().count + step });
  },
  getCount: () => get().count,
}));

export default useCounterStore;
