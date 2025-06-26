import CounterContext from "@/contexts/CounterContext";
import { use, useEffect } from "react";

function Left3({ showCounter = true }) {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });

  let counterContext = null;

  // 2. Context 사용하기
  if (showCounter) {
    // use를 이용하면 조건부로 컨텏스트 구독이 가능하므로
    // 불필요한 리렌더링을 방지할 수 있음
    // 리액트 훅의 규칙은 조건문 안에서는 사용을 할수 없다.
    // use는 조건문 안에서 사용할수 있다는 차이점이 있음
    counterContext = use(CounterContext);
  }

  return (
    <div>
      <h3>Left3</h3>
      <span>{counterContext?.count}</span>
    </div>
  );
}

export default Left3;
