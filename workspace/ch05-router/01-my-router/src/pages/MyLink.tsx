import React from "react";

interface MyLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function MyLink({ children, to }: MyLinkProps) {
  const hanleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 브라우저의 기본동작(페이지 이동) 취소
    e.preventDefault();

    // history API를 사용해서 주소 변경과 히스토리에 추가
    history.pushState(null, "", to);

    // URL 변경되었음을 알리는 popstate 이벤트를 수동으로 발생
    // APP 컴포넌트에서 이 이벤트를 감지해서 URL에 맞는 화면을 리렌더링 하도록 설정
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  return (
    <>
      <a href={to} onClick={hanleClick}>
        {children}
      </a>
    </>
  );
}
