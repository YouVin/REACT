import { useState } from "react";

function Parent() {
  return (
    <div>
      <h1>02 함수형 컴포넌트</h1>
      <ClickMe level={10} />
      <ClickMe level={5} />
      <ClickMe />
    </div>
  );
}

function ClickMe({ level = 1 }) {
  const [count, setCount] = useState(level);

  const increase = () => {
    setCount(count + level);
  };
  return (
    <div>
      클릭 횟수 X {level}: {count}
      <button onClick={increase}>클릭</button>
    </div>
  );
}

export default Parent;
