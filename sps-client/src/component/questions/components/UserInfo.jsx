import "../css/inquiry.css";

function UserInfo({ userInfo }) {
  return (
    <div className="user-info">
      <h3 className="sec-title">사용자 정보 확인</h3>
      <div className="info-card">
        <p>내 정보 확인</p>
        <div className="info-row">
          <span>등록자명</span>
          ㅁㄴㅇ
        </div>
        <div className="info-row">
          <span>소속회사</span>
          ㅁㄴㅇ
        </div>
        <div className="info-row">
          <span>이메일</span>
          ㅁㄴㅇ
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
