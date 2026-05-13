const EmailPreview = () => {
  return (
    <div className="email-preview">
      <h4 className="email-preview-title">이메일 미리보기</h4>
      <div className="email-preview-body">
        <div className="email-left">
          <div className="email-subject">제목: 설문 참여 안내</div>
          <div className="email-content">
            <p>안녕하세요. 회원님</p>
            <p>설문에 참여해 주세요.</p>
            <p>버튼 클릭 시 설문 참여 페이지로 이동합니다</p>
          </div>
          <button className="email-link-btn">설문 참여 링크</button>
        </div>
        <div className="email-right">
          <p>
            이메일 내 '설문 참여 링크'를 클릭하면 자동 로그인되어 바로 설문 참여
            페이지로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
