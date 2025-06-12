import Button from "@components/Button";
import { useEffect, useState } from "react";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = "1" }: CounterProps) {
  console.log("\tCounter 호출됨");

  const initCount = Number(children);

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(initCount);

  // // 마운트 된 후에 한번만 실행
  // useEffect(() => {
  //   // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("마운트 된 이후 빈 배열 전달");
  //   // 빈배열로 설정 후 마운트 된 이후로 호출되고, 배열 생략 시 마운트 + 업데이트 후에도 호출된다.
  // }, []);

  // // TODO 2. 증감값이 수정되면 1초 후에 증감치 만큼 1회 자동 증가
  // useEffect(() => {
  //   // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log("value 값이 변경되었을 때, ");
  //   // value 값 변경 시 호출.
  // }, [value]);

  useEffect(() => {
    console.log("setup 함수 호출");
    const timer = setInterval(() => {
      console.log(new Date());
    }, 1000);
    return () => {
      // cleanup(컴포넌트가 언마운트될 때 호출, setup 함수가 재실행 되기전 호출
      console.log("cleanup 함수 호출");
      clearInterval(timer);
    };
  });

  // 카운터 감소
  const handleDown = () => {
    setCount(count - value);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + value);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        value={value}
        onChange={(event) => setValue(Number(event?.target.value))}
      />
      <Button color="red" onClick={handleDown}>
        -_-
      </Button>
      <Button type="reset" onClick={handleReset}>
        0_0
      </Button>
      <Button type="submit" color="blue" onClick={handleUp}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
