import { useEffect, useState } from "react";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";

function App() {
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      console.log(location.pathname, "으로 주소 변경됨");
      setCurrentPath(location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange); // ✅ 정리!
    };
  }, []);

  const renderComponent = () => {
    switch (currentPath) {
      case "/":
      case "/home":
        return <Home />;
      case "/page1":
        return <Page1 />;
      case "/page2":
        return <Page2 />;
      default:
        return <p>404에러</p>;
    }
  };

  return <>{renderComponent()}</>;
}

export default App;
