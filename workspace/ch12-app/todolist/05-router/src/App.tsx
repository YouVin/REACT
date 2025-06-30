import { RouterProvider } from "react-router";
import router from "./routes-lazy";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p>로딩중... 아 기다려봐... 금방.. 해줄게.. </p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
