import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {
  const [data, setData] = useState<ReplyType[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 요청 보내기
  const requestCommentList = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const res = await fetch(
        "https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=5&delay=1000",
        {
          headers: {
            "Client-Id": "openmarket",
          },
        }
      );
      console.log("response", res);
      const jsonData = await res.json();
      console.log("jsonData", jsonData);
      if (jsonData.ok) {
        // 응답이 성공일 경우
        setData(jsonData.item);
        setError(null);
      } else {
        // 응답이 실패일 경우
        throw new Error(jsonData.message);
      }
    } catch (err) {
      setError(err as Error);
      setData(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCommentList();
  }, []); // 마운트 후에 한번만 실행
  const replyList = data?.map((reply) => (
    <li key={reply._id}>{reply.content}</li>
  ));
  return (
    <>
      {isLoading && <p>댓글 로딩중 .. .. </p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h3>댓글 목록</h3>
          <ul>{replyList}</ul>
          <CommentNew />
        </>
      )}
    </>
  );
}

export default CommentList;
