import { Post } from "@/types/board";

export async function fetchPosts(): Promise<Post[]> {
  // 준비된 api서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    headers: {
      "Client-Id": "openmarket",
    },
  });

  const data = await res.json();
  console.log(data.item);
  return data.item;
}
