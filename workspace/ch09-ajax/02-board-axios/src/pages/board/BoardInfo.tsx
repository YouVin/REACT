import useAxiosInstace from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
import { type BoardInfoResType, type BoardInfoType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  // axios instance
  const axios = useAxiosInstace();

  // API 서버에 1번 게시물의 상세정보를 fetch 요청 보내기
  const requestInfo = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const res = await axios.get<BoardInfoResType>("/posts/1?delay=1000", {});

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
    requestInfo();
  }, []); // 마운트 후에 한번만 실행
  return (
    <>
      <h1>02 Axios 라이브러리</h1>
      {isLoading && (
        <p>로딩중..... .... .. .. ... ... .. . 아 좀만 기다려요.. </p>
      )}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList />
        </>
      )}
    </>
  );
}

export default BoardInfo;
