import CommentNew from "@/pages/board/CommentNew";
import type { ReplyType } from "@/types/BoardType";
import { useEffect, useState } from "react";

function CommentList() {

  // 서버의 데이터를 저장할 상태
  const [data, setData] = useState<ReplyType[] | null>(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다.
  const requestCommentList = async () => {
    try{
      // 로딩 상태를 true로 지정
      setIsLoading(true);

      const response = await fetch('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=5&delay=1000', {
        headers: {
          'Client-Id': 'openmarket'
        }
      });
      console.log('response', response);
      const jsonData = await response.json();
      console.log('jsonData', jsonData);
      if(jsonData.ok){ // 응답이 성공일 경우
        // 댓글 목록 출력
        setData(jsonData.item);
        setError(null);
      }else{ // 응답이 실패일 경우
        // 에러 메세지 출력
        throw new Error(jsonData.message);
      }
    }catch(err){
      setError(err as Error);
      setData(null);
      console.error(err);
    }finally{
      // 성공, 실패와 상관 없이 로딩 상태를 false로 지정
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCommentList();
  }, []); // 마운트 후에 한번만 실행

  const replyList = data?.map(reply => <li key={ reply._id }>{ reply.content }</li>);

  let content = null;
  if(isLoading){
    content = <p>댓글 로딩중...</p>;
  }else if(error){
    content = <p>{ error.message }</p>;
  }else if(data){
    content = 
      <>
        <ul>
          { replyList }
        </ul>
        <CommentNew />
      </>;
  }

  return (
    <>
      <h3>댓글 목록</h3>

      { content }
      
    </>
  );
}

export default CommentList;