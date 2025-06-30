import useAxiosInstace from "@/hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CommentNew() {
  const [content, setContent] = useState("");

  // axios instance
  const axios = useAxiosInstace();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/posts/1/replies", formData),
    onSuccess() {
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["posts", 1, "replies"] });
    },
  });

  const handleAddComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    mutate(formData);
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
        <button type="submit" disabled={isPending}>
          등록
        </button>
      </form>
    </>
  );
}

export default CommentNew;
