const WithdrawCheck = () => {
  return (
    <>
      <section>
        <div>
          <h2>회원 탈퇴</h2>
          <h3>정말 탈퇴하시겠습니까?</h3>
          <div>
            탈퇴는 되돌릴 수 없으며 회원의 이름과 아이디, 이메일만 제거됩니다.
            작성했던 설문 내용은 삭제되지 않으며 동일한 아이디와 이메일로
            재가입하더라도 이전 설문 내용 등은 조회할 수 없습니다.
          </div>
        </div>
        <div>
          <span>탈퇴 사유</span>
          <input type="text" placeholder="탈퇴 사유를 입력하세요." />
        </div>
      </section>
      <section>
        <button type="button">취소</button>
        <button type="button">탈퇴</button>
      </section>
    </>
  );
};

export default WithdrawCheck;
