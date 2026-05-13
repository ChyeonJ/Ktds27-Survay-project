const TopArea = () => {
  return (
    <div className="top-area">
      <div className="search-area">
        <div className="filter-group">
          <label>상태</label>
          <select>
            <option>전체</option>
            <option>작성중</option>
            <option>진행중</option>
            <option>완료</option>
          </select>
        </div>

        <input type="text" placeholder="설문명 검색" />

        <div className="date-group">
          <label>기간</label>
          <input type="date" defaultValue="2024-04-01" />
          <span>~</span>
          <input type="date" defaultValue="2024-04-05" />
        </div>
      </div>

      <div className="button-area">
        <button type="button" className="register-button">
          새 설문 등록
        </button>
        <button type="button" className="excel-button">
          엑셀 다운로드
        </button>
      </div>
    </div>
  );
};
export default TopArea;
