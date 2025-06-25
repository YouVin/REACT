import useAxiosInstace from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType, ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {
  const [data, setData] = useState<ReplyType[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  const axios = useAxiosInstace();

  // API 서버에 1번 게시물의 댓글 목록을 요청 보내기
  const requestCommentList = async () => {
    // 작업이 실패하면 자동으로 재시도하기(catch 블럭에서 지정한 횟수만큼 requestCommentList() 호출)
    // 다른 탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기(requestCommentList())
    // 일정 시간동안은 캐시해서 서버 호출 횟수 줄이기
    // 추가적으로 호출해서 데이터 자동으로 갱신하기

    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const res = await axios.get<ReplyListResType>("/posts/1/replies", {
        params: {
          delay: 1000,
          // page: 3,
          // limit: 10,
        },
      });

      setData(res.data.item);
      setError(null);
    } catch (err) {
      setError(err as Error);
      setData(null);
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
