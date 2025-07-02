"use server";

import { PostInfoRes } from "@/types/board";

export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Client-Id": "openmarket",
    },
  });

  const data = await res.json();
  return data;
}
