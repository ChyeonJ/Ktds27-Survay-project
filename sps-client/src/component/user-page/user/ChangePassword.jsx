const ChangePassword = () => {
  return (
    <>
      <div>
        <span>현재 비밀번호</span>
        <input type="password" placeholder="현재 비밀번호를 입력하세요." />
      </div>
      <div>
        <span>새로운 비밀번호</span>
        <input type="password" placeholder="새로운 비밀번호를 입력하세요." />
      </div>
      <div>
        <span>새로운 비밀번호 확인</span>
        <input
          type="password"
          placeholder="새로운 비밀번호를 다시 입력하세요."
        />
      </div>
      <div>
        <button type="button">취소</button>
        <button type="button">확인</button>
      </div>
    </>
  );
};

export default ChangePassword;
