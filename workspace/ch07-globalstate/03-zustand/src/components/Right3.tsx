import useCounterStore from "@/zustand/counter";
import { useEffect } from "react";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });
  // const { countUp, countReset, countDown } = useCounterStore();

  // 리렌더링 수정하기
  const countUp = useCounterStore((state) => state.countUp);
  const countReset = useCounterStore((state) => state.countReset);
  const countDown = useCounterStore((state) => state.countDown);

  const getCount = useCounterStore((state) => state.getCount);

  //
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => countUp(1)}>+1</button>
      <button onClick={() => countReset()}>0</button>
      <button onClick={() => countDown(1)}>-1</button>
      <button onClick={() => console.log(getCount())}>count 한 값 확인</button>
    </div>
  );
}

export default Right3;
