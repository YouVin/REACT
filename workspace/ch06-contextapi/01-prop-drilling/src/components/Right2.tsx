import Right3 from "@/components/Right3";
import { useEffect } from "react";
type Right1Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Right2({ count, setCount }: Right1Props) {
  useEffect(() => {
    console.log("### Right2 렌더링.");
  });
  return (
    <div>
      <h2>Right2</h2>
      <Right3 count={count} setCount={setCount} />
    </div>
  );
}

export default Right2;
