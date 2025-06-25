import useAxiosInstace from "@/hooks/useAxiosInstance";
import { useState } from "react";

function CommentNew() {
  const [content, setContent] = useState("");

  // axios instance
  const axios = useAxiosInstace();

  // API 서버에 댓글 등록 요청
  const requestAddCommnent = async (formData: FormData) => {
    try {
      const res = await axios.post("/posts/1/replies", formData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    //formData.append("content", content);
    requestAddCommnent(formData);
  };
  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          cols={30}
          placeholder="댓글 내용"
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;
