const EmailChange = () => {
  return (
    <>
      <h2>이메일 변경</h2>
      <div>
        <span>기존 이메일</span>
        <span>{/* 기존 이메일 */}</span>
      </div>
      <div>
        <span>새로운 이메일</span>
        <input type="text" placeholder="변경할 이메일을 입력하세요." />
      </div>
      <div>
        <button>취소</button>
        <button>변경</button>
      </div>
    </>
  );
};

export default EmailChange;
