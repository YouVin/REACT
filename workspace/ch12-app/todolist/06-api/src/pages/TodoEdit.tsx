import useAxiosInstace from "@hooks/useAxiosInstance";
import type { TodoItem } from "@pages/TodoInfo";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router";

interface OutletContextProps {
  item: TodoItem;
  setData: (data: TodoItem) => void;
}

function TodoEdit() {
  const axiosInstance = useAxiosInstace();
  const navigate = useNavigate();

  // const { item } = useOutletContext<OutletContextProps>();
  // const { item }: OutletContextProps = useOutletContext();
  const { item, setData }: OutletContextProps = useOutletContext();

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

  const updateTodo = async (formData: TodoItem) => {
    console.log("api 서버에 수정 요청", formData);

    try {
      console.log("수정할 아이템", item);
      const res = await axiosInstance.patch(`/todolist/${item._id}`, formData);
      alert("할일이 수정 되었습니다");
      console.log("수정된 아이템", res.data.item);
      setData(res.data.item);
      // 상세보기로 이동
      navigate(`/list/${item._id}`);
    } catch (err) {
      console.error(err);
      alert("할일 수정에 실패하였습니다.");
    }
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
                value: /\S/,
                message: "제목에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols={23}
            rows={5}
            {...register("content", {
              required: "내용을 입력하세요.",
              pattern: {
                value: /\S/,
                message: "내용에 공백만 입력할 수 없습니다.",
              },
            })}
          />
          <div className="input-error">{errors.content?.message}</div>
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register("done")} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </div>
  );
}

export default TodoEdit;
