import RegistForm from "@/app/posts/new/RegistForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "게시글 등록",
  description: "게시글 등록 페이지입니다.",
};

export default function NewPage() {
  return (
    <div className="p-2 flex justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-100 rounded-2xl shadow p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">게시글 등록</h1>
        <RegistForm />
      </div>
    </div>
  );
}
