const PasswordCheck = () => {
  return (
    <>
      <div>
        <h2>비밀번호 확인</h2>
      </div>
      <div>
        <h3>회원 정보 확인을 위해 비밀번호 인증이 필요합니다.</h3>
        <div>
          비밀번호가 5회 이상 틀릴 경우 로그아웃되며 30분간 로그인이 제한됩니다.
        </div>
        <input type="text" placeholder="비밀번호를 입력하세요." />
      </div>
      <div>
        <button type="button">확인</button>
      </div>
    </>
  );
};

export default PasswordCheck;
