import Right2 from "@/components/Right2";
import { useEffect } from "react";

type Right1Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

function Right1({ count, setCount }: Right1Props) {
  useEffect(() => {
    console.log("## Right1 렌더링.");
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 count={count} setCount={setCount} />
    </div>
  );
}

export default Right1;
