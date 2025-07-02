// app/layout.tsx ← 클라이언트 선언 X (중요)
import Header from "@/app/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
