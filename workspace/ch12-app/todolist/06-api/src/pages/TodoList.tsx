import useAxiosInstace from "@hooks/useAxiosInstance";
import type { TodoItem } from "@pages/TodoInfo";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface TodoList {
  items: TodoItem[];
}

function TodoList() {
  const [data, setData] = useState<TodoList | null>(null);
  const axios = useAxiosInstace();

  // 할일 목록을 API 서버에서 조회
  const fetchTodoList = async () => {
    console.log("API 서버에 목록 요청");

    try {
      const res = await axios.get("/todolist");
      // res.data로 설정
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert("할일 목록 조회에 실패했습니다.");
    }
  };

  // 삭제 처리
  const handleDelete = async (_id: number) => {
    console.log("API 에서 Todo 삭제 요청", _id);
    try {
      await axios.delete(`/todolist/${_id}`);
      alert(" 삭제가 완료되었습니다.");
      fetchTodoList();
    } catch (err) {
      console.error(err);
      alert("할일 삭제에 실패하였습니다.");
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []); // 빈 배열 전달해서 마운트 시에만 호출;

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));
  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
    </div>
  );
}

export default TodoList;
