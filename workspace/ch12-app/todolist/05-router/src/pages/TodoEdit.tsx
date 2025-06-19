import type { TodoItem } from "@pages/TodoInfo";
import { Link, useNavigate, useOutletContext } from "react-router";
import { useForm } from "react-hook-form";

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  const navigate = useNavigate();

  // const { item } = useOutletContext<OutletContextProps>();
  // const { item }: OutletContextProps = useOutletContext();
  const { item }: OutletContextProps = useOutletContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  const updateTodo = (formData: TodoItem) => {
    console.log("api 서버에 수정 요청", formData);
    alert("할일이 수정 되었습니다");

    // 상세보기로 이동
    navigate(`/list/${item._id}`);
  };
  return (
    <div id="main">
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(updateTodo)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "제목을 입력하세요.",
              pattern: {
                value: /\s/,
                message: "제목에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols={23}
            rows={5}
            defaultValue={item.content}
          />
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked={item.done} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;
