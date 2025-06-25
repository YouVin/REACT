import axios from "axios";

const API_SERVER = "https://fesp-api.koyeb.app/market";

function useAxiosInstace() {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Client-Id": "openmarket",
    },
  });
  return instance;
}

export default useAxiosInstace;
