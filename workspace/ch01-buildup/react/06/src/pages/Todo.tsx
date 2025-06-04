import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  // 샘플 목록
  const initItemList = [
    { num: 1, title: "자바스크립트 공부", done: true },
    { num: 2, title: "JS 프로젝트", done: true },
    { num: 3, title: "React 공부", done: false },
  ];

  const [itemList, setItemList] = React.useState(initItemList);

  function addItem(title: string) {
    console.log("할일 추가");
    const item = {
      num: itemList[itemList.length - 1]?.num + 1 || 1,
      title,
      done: false,
    };

    setItemList([...itemList, item]);
  }

  function toggleDone(num: number) {
    console.log(num, "완료/미완료");
    const newItemList = itemList.map((item) =>
      item.num === num ? { ...item, done: !item.done } : item
    );
    setItemList(newItemList);
  }
  function deleteItem(num: number) {
    console.log(num, "할일 삭제");
    const newItemList = itemList.filter((item) => item.num !== num);
    setItemList(newItemList);
    // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
    // const index = itemList.findIndex((item) => item.num === num);
    // itemList.splice(index, 1);
  }

  return (
    <div id="main">
      <div id="container">
        <ul>
          <li>
            <TodoInput addItem={addItem} />
            <TodoList
              itemList={itemList}
              toggleDone={toggleDone}
              deleteItem={deleteItem}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Todo;
