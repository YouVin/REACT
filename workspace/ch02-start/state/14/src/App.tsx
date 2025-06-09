function App() {
  return (
    <>
      <h1>14 상태관리 대상이 복합 객체일 경우 불변성 (feat. immer)</h1>
      <p>
        이메일: u1@market.com
        <br />
        이름: 무지
        <br />
        전화번호: 01022223333
        <br />
      </p>
      <ul>
        <li>회사: 서울시 강동구 천호동 123</li>
        <li>집: 서울시 강동구 성내동 234</li>
      </ul>

      <p>
        <label htmlFor="1">회사</label>
        <input id="1" type="text" name="1" />
        <br />
        <label htmlFor="1">집</label>
        <input id="2" type="text" name="2" />
        <br />
      </p>
    </>
  );
}

export default App;
