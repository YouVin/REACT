import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
// import type { BoardInfoResType, BoardInfoType } from '@/types/BoardType';
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
// import { useEffect, useState } from 'react';

function BoardInfo() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, error } = useSuspenseQuery({
    queryKey: ["post", 1],
    queryFn: () => axios.get("posts/1?delay=1000"),
    select: (response) => response.data.item,
  });

  return (
    <>
      <h1>04 React Query 라이브러리 + Suspense</h1>

      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <Suspense
            fallback={
              <>
                <h1>월요일 좋아~ </h1>
                <br />
                <h2>기다리면 나옵니다 ㄱㄷ</h2>
                <br />
                <h3>댓글 로오 디 잉 ㅇㅇㅇㅇㅇㅇ줒 우웅 ㄷㄷ</h3>
              </>
            }
          >
            <CommentList />
          </Suspense>
        </>
      )}
    </>
  );
}

export default BoardInfo;
