import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `${params.id}번 게시물`,
    description: "게시판 이용 수칙입니다.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ id: string; slug?: string[] }>;
}) {
  const pageParams = await params;
  return (
    <>
      <h1>상세 조회 - {pageParams.id}번 게시물</h1>
      <Link href={`/posts/${pageParams.id}/likes`}>좋아요 목록 보기</Link>

      {pageParams.slug?.[0] && (
        <>
          <h2>
            {pageParams.id}번 게시물의
            {pageParams.slug[0] === "likes" ? " 좋아요 목록" : " 즐겨찾기 목록"}
          </h2>
        </>
      )}

      {pageParams.slug?.[1] && (
        <>
          <h3>{pageParams.slug[1]} 상세 정보 출력</h3>
          <p>좋아핑, 2025-07-01 좋아요 누름</p>
        </>
      )}
    </>
  );
}
