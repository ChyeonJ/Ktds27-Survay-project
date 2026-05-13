import { useState } from "react";

const UserList = () => {
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
        <div className="user-search-section">
          <p>n명의 회원이 검색되었습니다.</p>
          <span>회사 아이디</span>
          <input placeholder="회사 아이디를 입력하세요." />

          <span>회사명</span>
          <input placeholder="회사명을 입력하세요." />

          <span>회원명</span>
          <input placeholder="회원명을 입력하세요." />
        </div>

        <div>
          <span>등록 기간</span>
          <span>
            <input type="date" />
            <span>-</span>
            <input type="date" />
          </span>

          <span>회원 이메일</span>
          <input placeholder="이메일을 입력하세요." />
        </div>

        <div>
          <button type="button">검색</button>
        </div>
      </section>
      <section>
        <div>
          <div className="user-list-section">
            <select defaultValue={10}>
              <option value="10">10개씩 보기</option>
              <option value="30">30개씩 보기</option>
              <option value="50">50개씩 보기</option>
              <option value="100">100개씩 보기</option>
            </select>
          </div>

          <div>
            <button type="button" disabled>
              이전
            </button>
            <span>1</span>
            <button type="button" disabled>
              다음
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                {/* TODO: 회사명 정렬 */}
                <th>순번</th>
                <th>회원 아이디</th>
                <th>회사명</th>
                <th>회원명</th>
                <th>회원 이메일</th>
                <th>등록일</th>
                <th>마지막 수정일</th>
                <th>등록자</th>
                <th>마지막 수정자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10}>조회된 회원이 없습니다.</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>1</td>
                <td>testuser</td>
                <td>kt ds</td>
                <td>김유저</td>
                <td>testuser@ktds.co.kr</td>
                <td>2023-01-12</td>
                <td>2025-11-14</td>
                <td>김유저</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <button type="button">엑셀 다운로드</button>
        <button
          type="button"
          onClick={buttonClickHandler.bind(this, "password")}>
          비밀번호 초기화
        </button>
        <button type="button" onClick={buttonClickHandler.bind(this, "delete")}>
          일괄 삭제
        </button>
      </section>

      {showPopup === "password" && (
        <div>
          <div>
            <h2>비밀번호 일괄 변경</h2>
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

export default UserList;
