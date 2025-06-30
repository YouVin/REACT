import BoardInfo from "@/pages/board/BoardInfo";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p>전체 로딩중 기달기달</p>}>
      <BoardInfo />
    </Suspense>
  );
}

export default App;
