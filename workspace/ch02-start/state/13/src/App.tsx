import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 50, y: 150 });
  return (
    <>
      <h2>13 상태 관리 대상이 객체일 경우 주의 사항</h2>
      <div
        className="container"
        onPointerMove={(event) => {
          // 객체일 때는 속성값 변경 시 리액트가 변화하지 않았다 인지
          // position.x = event.pageX;
          // position.y = event.pageY;

          // 새로운 객체로 만들어 넣어주기
          // const newPosition = {
          //   x: event.pageX,
          //   y: event.pageY,
          // };
          // setPosition(newPosition);

          // 스프레드
          setPosition({ ...position, x: event.pageX, y: event.pageY });
        }}
      ></div>
      <div
        className="circle"
        style={{
          pointerEvents: "none",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </>
  );
}

export default App;
