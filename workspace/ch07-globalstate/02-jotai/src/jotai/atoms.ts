import { atom } from "jotai";

export const countAtom = atom(6);

// Read-write atom
// 첫번째 인자가 null 일 경우 읽기 불가능 (쓰기만 가능)
export const countDownAtom = atom(null, (get, set, step: number) => {
  const count = get(countAtom);
  set(countAtom, count - step);
});
