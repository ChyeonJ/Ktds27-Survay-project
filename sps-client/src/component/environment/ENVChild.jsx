function ENVChild({ selectedParentName, filteredChildList }) {
  return (
    <div className="card">
      <div className="top-header">
        <h2>
          하위 분류
          <span>({selectedParentName})</span>
        </h2>

        <div className="search-box">
          <input type="text" placeholder="환경 변수명 검색" />

          <button>🔍</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>환경 변수 ID</th>
            <th>환경 변수명</th>
            <th>등록자</th>
            <th>등록일</th>
            <th>수정자</th>
            <th>수정일</th>
            <th>관리</th>
          </tr>
        </thead>

        <tbody>
          {filteredChildList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.writer}</td>
              <td>{item.regDate}</td>
              <td>{item.modifier}</td>
              <td>{item.modDate}</td>

              <td>
                <div className="icon-group">
                  <button className="icon-btn">✏️</button>

                  <button className="icon-btn icon-delete">🗑</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ENVChild;
