/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@components/Button";
import { useState } from "react";

function Counter() {
  // let count = 0;

  const [count, setCount] = useState(0);

  // 카운터 감소
  const handleDown = () => {
    // 데이터 갱신, count 값 감소
    setCount(count - 1);
  };

  // 카운터 증가
  const handleUp = () => {
    // 데이터 갱신, count 값 증가
    setCount(count + 1);
  };

  // 카운터 초기화
  const handleReset = (event: React.MouseEvent) => {
    // 데이터 갱신, count 값 초기화
    setCount(0);
  };

  return (
    <div id="counter">
      <Button onClick={handleDown} color="red">
        -_-
      </Button>
      <Button onClick={(event) => handleReset(event)} color="gray">
        0_0
      </Button>
      <Button onClick={handleUp} color="blue">
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
