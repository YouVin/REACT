import { useState, type KeyboardEvent } from "react";

interface ToodInputProps {
  addItem: (title: string) => void;
}
function TodoInput({ addItem }: ToodInputProps) {
  // 사용자 입력을 다루는 경우에는 대부분 state로 관리
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    console.log("추가 버튼 클릭");
    addItem(title);
    setTitle("");
  };

  const handleAddKeydown = (event: KeyboardEvent) => {
    if (event.key === "Enter") handleAdd();
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        autoFocus
        value={title}
        onChange={(event) => setTitle(event?.target.value)}
        onKeyDown={handleAddKeydown}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}
export default TodoInput;
