import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Todo from "./pages/Todo.js";
import Reaction from "./reaction.js";

/*
          ┌───────── App ──────────┐
          │           │            │
        Header       Todo        Footer
                      │
                  ┌───┴────┐
            TodoInput   TodoList
                           │
                        TodoItem
    */
function App() {
  // 샘플 목록
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = Reaction.useState(initItemList);

  // 할일 추가
  function addItem(title) {
    console.log("할일 추가");
    const item = {
      num: itemList[itemList.length - 1]?.num + 1 || 1,
      title,
      done: false,
    };
    setItemList([...itemList, item]);
  }

  // 완료/미완료 처리
  function toggleDone(num) {
    console.log(num, "완료/미완료");
    const newItemList = itemList.map((item) =>
      item.num === num ? { ...item, done: !item.done } : item
    );

    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(num) {
    console.log(num, "할일 삭제");
    const newItemList = itemList.filter((item) => item.num !== num);
    // 기존 배열에서 일치하는 num을 제거하는 것이 아닌,
    // num이 일치하지 않는 아이템들로 새로운 배열을 만들기
    // 때문에, 기존 배열에서 사라졌을 경우 => 렌더링이 일어나지 않는다.
    // 새롭게 만들경우 => 렌더링이 발생한다.
    setItemList(newItemList);
  }

  return Reaction.createElement(
    "div",
    { id: "todo" },
    Header,
    Todo({ itemList, addItem, toggleDone, deleteItem }),
    Footer
  );
}
export default App;
