import axios from "axios";

const API_SERVER = "https://fesp-api.koyeb.app/todo";

function useAxiosInstace() {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json", // 요청 바디의 데이터 타입
      // 크롬 설정일 경우 default 가 application/json, text/plain, */*
      Accept: "application/json",
    },
  });
  return instance;
}

export default useAxiosInstace;
