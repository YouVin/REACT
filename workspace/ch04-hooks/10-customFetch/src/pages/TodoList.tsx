import useAxios from "@hooks/useAxios";
import useFetch from "@hooks/useFetch";
import type { TodoListRes } from "types/todo";

function TodoList() {
  const { isLoading, error, data } = useAxios({ url: "/todolist?delay=1000" });
  return (
    <>
      <h1>10 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 목록</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      {isLoading && <p>로딩중...</p>}

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {/* Todo 목록을 리스트로 렌더링 */}
      <ul>
        {(data as TodoListRes)?.items.map((item) => (
          <li key={item._id}>
            <a href={`/todolist/${item._id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;
