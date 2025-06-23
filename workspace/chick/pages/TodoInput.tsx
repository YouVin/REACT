function TodoInput() {
  const [title, setTitle] = useState("");
  return (
    <div className="todoinput">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.value.target)}
        autoFocus
      />
      <button type="button">추가</button>
    </div>
  );
}

export default TodoInput;
