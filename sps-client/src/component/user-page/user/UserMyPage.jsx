const UserMyPage = () => {
  return (
    <>
      <section>
        <div>
          <span>계정명</span>
          <span>testuser</span>

          <span>회원명</span>
          <span>김유저</span>
          <button type="button">회원명 변경</button>
        </div>
        <div>
          <span>회사명</span>
          <span>kt ds</span>
          <button type="button">회사명 변경</button>

          <span>이메일</span>
          <span>testuser@ktds.co.kr</span>
          <button type="button">이메일 변경</button>
        </div>
      </section>
      <section>
        <div>
          <button type="button">비밀번호 변경</button>
          <button type="button">탈퇴</button>
        </div>
      </section>
      <section>
        {/* 참여 설문 테이블 */}
        {/* 참여 설문 조회 */}
        {/* 참여 설문 취소 */}
      </section>
    </>
  );
};

export default UserMyPage;
