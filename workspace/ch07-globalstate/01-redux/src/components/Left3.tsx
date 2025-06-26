import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/RTK/store";
function Left3() {
  useEffect(() => {
    console.log("#### Left3 렌더링.");
  });

  const count = useSelector((state: RootState) => state.counterSlice);

  return (
    <div>
      <h3>Left3</h3>
      <span>{count}</span>
    </div>
  );
}

export default Left3;
