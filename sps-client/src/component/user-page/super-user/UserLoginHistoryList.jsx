const UserLoginHistoryList = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <section>
        <div className="user-search-section">
          <span>유형</span>
          <div>
            <select defaultValue={"all"}>
              <option value="all">전체</option>
              <option value="super-user">관리자</option>
              <option value="user">사용자</option>
            </select>
            <div>
              <span>아이디</span>
              <input type="text" placeholder="아이디를 입력하세요." />
              <span>회사명</span>
              <input type="text" placeholder="회원명을 입력하세요." />
            </div>
          </div>
          <div>
            <span>로그인 날짜</span>
            <input type="date" defaultValue={today} />
            <span>결과</span>
            <select name="" id="">
              <option value="success">성공</option>
              <option value="fail">실패</option>
              <option value="locked">잠김</option>
            </select>
            <button>검색</button>
          </div>
        </div>
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>사용자 유형</th>
              <th>아이디</th>
              <th>사용자 이름</th>
              <th>회사명</th>
              <th>로그인 결과</th>
              <th>로그인 시간</th>
              <th>누적 실패 횟수</th>
              <th>실패 사유</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8}>조회된 회원이 없습니다.</td>
            </tr>
            <tr>
              <td>관리자</td>
              <td>admin</td>
              <td>관리자 A</td>
              <td>-</td>
              <td>성공</td>
              <td>2026. 4. 26. 오후 1:01:24</td>
              <td>0</td>
              <td></td>
            </tr>
            <tr>
              <td>사용자</td>
              <td>testuser</td>
              <td>김유저</td>
              <td>kt ds</td>
              <td>실패</td>
              <td>2026. 4. 26. 오후 1:01:00</td>
              <td>1</td>
              <td>비밀번호</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <button type="button">엑셀 다운로드</button>
      </section>
    </>
  );
};

export default UserLoginHistoryList;
