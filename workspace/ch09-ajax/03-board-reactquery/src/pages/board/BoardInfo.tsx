import useAxiosInstance from "@/hooks/useAxiosInstance";
import CommentList from "@/pages/board/CommentList";
// import type { BoardInfoResType, BoardInfoType } from '@/types/BoardType';
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from 'react';

function BoardInfo() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, isLoading, error } = useQuery({
    queryKey: ["post", 1],
    queryFn: () => axios.get("posts/1?delay=1000"),
    select: (response) => response.data.item,
  });

  return (
    <>
      <h1>03 React Query(Tanstack Query) 라이브러리</h1>

      {isLoading && <p>로딩중...</p>}
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
