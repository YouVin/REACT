"use client";

import Link from "next/link";

export default function RootError({ error }: { error: Error }) {
  console.error("error.tsx에서 처리", error);
  return (
    <>
      <div>에러 발생!</div>
      <Link href={"/"}>홈으로</Link>
    </>
  );
}
