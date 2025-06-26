import counterActionCreator from "@/redux/counterActionCreactor";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Right3() {
  useEffect(() => {
    console.log("#### Right3 렌더링.");
  });

  const dispatch = useDispatch();
  const action = counterActionCreator.countUp(3);

  return (
    <div>
      <h3>Right3</h3>
      <button onClick={() => dispatch(action)}>+1</button>
    </div>
  );
}

export default Right3;
