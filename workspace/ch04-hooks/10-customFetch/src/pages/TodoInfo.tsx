import useAxios from "@hooks/useAxios";
import useFetch from "@hooks/useFetch";

function TodoInfo() {
  const todoId = location.pathname.split("/").pop();

  const { isLoading, error, data } = useAxios({
    url: `/todolist/${todoId}?delay=1000`,
  });
  return (
    <>
      <h1>10 Custom Hook - 커스텀 훅 없이 fetch API 사용</h1>
      <h2>할일 상세 조회</h2>

      {/* 로딩중일 때 로딩중 메시지 표시 */}
      {isLoading && <p>로딩중...</p>}

      {/* 에러가 있을 경우 빨간색으로 에러 메시지 표시 */}
      {error && <p style={{ color: "red" }}>{error.message}</p>}

      {!isLoading && !error && data && "item" in data && (
        <div>
          <div>제목 : {data.item.title}</div>
          <div>내용 : {data.item.content}</div>
          <div>상태 : {data.item.done ? "완료" : "미완료"}</div>
          <div>작성일 : {data.item.createdAt}</div>
          <div>수정일 : {data.item.updatedAt}</div>
        </div>
      )}
    </>
  );
}
export default TodoInfo;
