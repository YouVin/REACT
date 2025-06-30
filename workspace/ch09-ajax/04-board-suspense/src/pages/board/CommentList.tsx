import useAxiosInstace from "@/hooks/useAxiosInstance";
import CommentNew from "@/pages/board/CommentNew";
import type { ReplyListResType } from "@/types/BoardType";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

function CommentList() {
  const axios = useAxiosInstace();

  const { data, error } = useSuspenseQuery({
    queryKey: ["post", 1, "replies"],
    queryFn: () =>
      axios.get("posts/1/replies", {
        params: {
          delay: 1000,
        },
      }),
    select: (response: { data: ReplyListResType }) => response.data.item,
    retry: 3, // 실패 시 재시도 횟수
    refetchOnWindowFocus: true, // 다른 탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신
    staleTime: 1000 * 5, // 5초 동안은 바뀐 내용을 그저 캐시 해서 사용
    refetchInterval: 1000 * 3, // 3초마다 주기적으로 리렌더링
  });

  const replyList = data?.map((reply) => (
    <li key={reply._id}>{reply.content}</li>
  ));

  return (
    <>
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
