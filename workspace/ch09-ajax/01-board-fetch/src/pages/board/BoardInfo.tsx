import CommentList from "@/pages/board/CommentList";
import type { BoardInfoType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 상세정보를 fetch 요청 보내기
  const requestInfo = async () => {
    try {
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const res = await fetch(
        "https://fesp-api.koyeb.app/market/posts/1?delay=1000",
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
    requestInfo();
  }, []); // 마운트 후에 한번만 실행
  return (
    <>
      <h1>01 Fetch API</h1>
      {isLoading && (
        <p>로딩중..... .... .. .. ... ... .. . 아 좀만 기다려요.. </p>
      )}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList replies={data.replies} />
        </>
      )}
    </>
  );
}

export default BoardInfo;
