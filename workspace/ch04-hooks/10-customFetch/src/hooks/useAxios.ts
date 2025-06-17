import axios from "axios";
import { useEffect, useState } from "react";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://fesp-api.koyeb.app/todo";

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number; // Todo 아이템의 고유 식별자
  title: string; // Todo 제목
  done: boolean; // 완료 여부
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
interface TodoListRes {
  ok: 1; // 성공 여부 (1: 성공)
  items: Todo[]; // Todo 아이템 배열
  pagination: {
    // 페이지네이션 정보
    page: number; // 현재 페이지
    limit: number; // 페이지당 아이템 수
    total: number; // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

// 에러 응답 데이터 타입 정의
interface ErrorRes {
  ok: 0; // 성공 여부 (0: 실패)
  error: Error; // 에러 객체
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | ErrorRes;

function useAxios(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<TodoListRes | null>(null);
  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);
  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log("fetchTodo 함수 호출됨", params);
    try {
      // 로딩 상태를 true로 설정
      setIsLoading(true);

      const res = await axios.get(API_SERVER + params.url);
      console.log("서버 응답:", res);

      const data = res.data as ResData;

      console.log("파싱된 데이터:", data);

      if (data.ok === 1) {
        setData(data);
        setError(null);
      } else {
        throw new Error(data.error.message);
      }
    } catch (err) {
      // 네트워크 오류 같은 예외 발생 시
      console.error(err);
      setError(err as Error);
    } finally {
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return { isLoading, error, data };
}

export default useAxios;
