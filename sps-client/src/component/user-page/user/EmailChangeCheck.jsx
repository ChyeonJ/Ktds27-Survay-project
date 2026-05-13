const EmailChangeCheck = () => {
  return EmailChangeCodeCheck;
};

export default EmailChangeCheck;

export const EmailChangeLinkCheck = () => {
  return (
    <>
      <h2>이메일 인증 필요</h2>
      <div>
        {}로 인증 메일을 발송했습니다. 해당 메일에 첨부된 링크를 클릭해 인증을
        완료해 주세요.
      </div>
    </>
  );
};

export const EmailChangeCodeCheck = () => {
  return (
    <>
      <h2>이메일 인증 필요</h2>
      <div>
        <div>{}로 인증 번호를 발송했습니다. 아래에 인증 번호를 입력하세요.</div>
        <input type="number" placeholder="인증 번호를 입력하세요." />
        <button type="button">취소</button>
        <button type="button">확인</button>
      </div>
    </>
  );
};
