import "../css/inquiry.css";

function UserInfo({ userInfo }) {
  return (
    <div className="user-info">
      <h3 className="sec-title">사용자 정보 확인</h3>
      <div className="info-card">
        <p>내 정보 확인</p>
        <p>
          <span>등록자명</span>
          <span>{userInfo.name}</span>
        </p>
        <p>
          <span>소속회사</span>
          <span>{userInfo.company}</span>
        </p>
        <p>
          <span>이메일</span>
          <span>{userInfo.email}</span>
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
