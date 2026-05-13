import { useState } from "react";

const UserInfo = () => {
  const [showPopup, setShowPopup] = useState();

  const closeButtonClickHandler = () => {
    setShowPopup();
  };

  const buttonClickHandler = (func) => {
    setShowPopup(func);
  };

  return (
    <>
      <section>
        <div>
          <span>회사 아이디</span>
          <span>testuser</span>

          <span>회사명</span>
          <span>kt ds</span>
        </div>
        <div>
          <span>회원명</span>
          <span>김유저</span>

          <span>회원 이메일</span>
          <span>testuser@ktds.co.kr</span>
        </div>
        <div>
          <span>최초 등록일</span>
          <span>2023-01-12</span>

          <span>마지막 수정일</span>
          <span>2025-11-14</span>
        </div>
        {/* TODO: 삭제된 계정일 때만 노출 */}
        <div>
          <span>삭제일</span>
          <span>2026-02-18</span>

          <span>삭제 사유</span>
          <span>사용자 요청에 의한 삭제</span>
        </div>
      </section>
      <section>
        <div>비밀번호 변경이력</div>
        <table>
          <thead>
            <tr>
              <th>순번</th>
              <th>변경일</th>
              <th>변경자</th>
              <th>변경 사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4}>변경 내역이 없습니다.</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2025-11-12</td>
              <td>관리자 A</td>
              <td>사용자 요청에 의한 초기화</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2025-11-13</td>
              <td>김유저</td>
              <td>직접 변경</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2025-11-14</td>
              <td>김유저</td>
              <td>직접 변경</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <button
          type="button"
          onClick={buttonClickHandler.bind(this, "password")}>
          비밀번호 변경
        </button>
        <button type="button" onClick={buttonClickHandler.bind(this, "delete")}>
          삭제
        </button>
      </section>

      {showPopup === "password" && (
        <div>
          <div>
            <h2>비밀번호 변경</h2>
          </div>
          <div>
            <input type="text" placeholder="비밀번호 변경 사유를 입력하세요." />
            <div className="user-caution">
              변경된 비밀번호와 변경 사유가 회원에게 전송됩니다.
            </div>
          </div>
          <div>
            <button type="button" onClick={closeButtonClickHandler}>
              취소
            </button>
            <button type="button">변경</button>
          </div>
        </div>
      )}

      {showPopup === "delete" && (
        <div>
          <div>
            <h2>사용자 계정 삭제</h2>
          </div>
          <div>
            <input type="text" placeholder="삭제 사유를 입력하세요." />
            <div className="user-caution">
              삭제는 되돌릴 수 없으며 삭제 결과와 삭제 사유가 회원에게
              전송됩니다.
            </div>
          </div>
          <div>
            <button type="button" onClick={closeButtonClickHandler}>
              취소
            </button>
            <button type="button">삭제</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
