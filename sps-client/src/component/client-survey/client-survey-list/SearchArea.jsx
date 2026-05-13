const SearchArea = () => {
  return (
    <div className="search-area">
      <select className="status-select">
        <option>전체 상태</option>
        <option>미참여</option>
        <option>응답 중</option>
        <option>응답 완료</option>
        <option>응답 취소</option>
      </select>

      <div className="date-group">
        <label>기간</label>
        <input type="date" defaultValue="2024-04-01" />
        <span>~</span>
        <input type="date" defaultValue="2024-04-05" />
      </div>

      <div className="search-input-wrap">
        <input type="text" placeholder="설문 제목 검색" />
        <span className="search-icon">⌕</span>
      </div>
    </div>
  );
};
export default SearchArea;
