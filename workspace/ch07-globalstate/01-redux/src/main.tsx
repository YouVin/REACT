import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "@/RTK/counterSlice.ts";

// Redux 스토어
// import store from "@/redux/store.ts";

// Redux tooklit 스토어

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
