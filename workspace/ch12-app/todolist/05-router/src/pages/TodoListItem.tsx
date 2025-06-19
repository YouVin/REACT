import type { TodoItem } from "@pages/TodoInfo";
import { Link } from "react-router";

interface TodoListProps {
  item: TodoItem;
  handleDelete: (_id: number) => void;
}

function TodoListItem({ item, handleDelete }: TodoListProps) {
  return (
    <li>
      <span>{item._id}</span>
      <Link to={`/list/${item._id}`}>
        {item.done ? <s>{item.title}</s> : item.title}
      </Link>
      <button type="button" onClick={() => handleDelete(item._id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoListItem;
