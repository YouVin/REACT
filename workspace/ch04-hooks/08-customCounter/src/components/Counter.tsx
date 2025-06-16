import useCounter from "@/hooks/useCounter";
import Button from "@components/Button";

interface CounterProps {
  children: string;
}

// Counter 컴포넌트
function Counter({ children = "1" }: CounterProps) {
  console.log("\tCounter 호출됨");

  const initCount = Number(children);
  // 커스텀 훅에서 사용한 인자들 가져오기 initCount는 초기값 설정.
  const { count, stepRef, down, up, reset } = useCounter(initCount);

  // 커스텀 훅
  useCounter(initCount);

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      <input
        id="step"
        type="number"
        // defaultValue로 바꿔줘야 업다운이 됩니다(비제어 컴포넌트)
        defaultValue={stepRef.current}
        onChange={(event) => (stepRef.current = Number(event.target.value))}
      />
      <Button color="red" onClick={down}>
        -_-
      </Button>
      <Button type="reset" onClick={reset}>
        0_0
      </Button>
      <Button type="submit" color="blue" onClick={up}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
