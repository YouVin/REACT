import Reaction from "../reaction.js";
// 헤더 컴포넌트
function Header() {
  console.log("\tHeader 호출됨");
  return Reaction.createElement(
    "header",
    null,
    Reaction.createElement(
      "h1",
      null,
      "Counter - 07. 데이터(상태) 변경시 자동으로 UI 리렌더링"
    ),
    Reaction.createElement(
      "p",
      null,
      "파일 경로: ",
      Reaction.createElement(
        "span",
        { id: "filepath" },
        `ch${document.URL.split("/ch")[1]}index.html`
      )
    )
  );
}
export default Header;
