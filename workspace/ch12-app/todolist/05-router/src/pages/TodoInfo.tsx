import { useEffect, useState } from "react";
import { Link, Outlet, useMatch, useParams } from "react-router";

export interface TodoItem {
  _id: number;
  title: string;
  content?: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}
const item = {
  _id: 2,
  title: "자바스크립트 복습",
  content: "리액트도 당연히 복습.",
  done: false,
  createdAt: "2025.06.17 16:49:00",
  updatedAt: "2025.06.17 16:49:00",
};

function TodoInfo() {
  const { _id } = useParams();

  const infoMatch = useMatch("/list/:_id");

  const [data, setData] = useState<TodoItem | null>(null);

  const fetchTodoInfo = () => {
    console.log("API 서버에 상세 정보 요청");

    setData(item);
  };

  useEffect(() => {
    fetchTodoInfo(); // 마운트 시에만 호출
  }, []);
  return (
    <>
      <div id="main">
        <h2>할일 상세 보기</h2>
        {data && (
          <>
            <div className="todo">
              <div>제목 : {data.title}</div>
              <div>내용 : {data.content}</div>
              <div>상태 : {data.done ? "완료" : "미완료"}</div>
              <div>작성일 : {data.createdAt}</div>
              <div>수정일 : {data.updatedAt}</div>

              {infoMatch && (
                <>
                  <Link to={`/list/${_id}/edit`}>수정</Link>
                  <Link to="/list">목록</Link>
                </>
              )}
            </div>
          </>
        )}

        <Outlet context={{ item }} />
      </div>
    </>
  );
}

export default TodoInfo;
