function ENVParent({ parentList, selectedParent, setSelectedParent }) {
  return (
    <div className="left-panel">
      <div className="card">
        <h2>상위 분류</h2>

        <div className="search-area">
          <div className="form-group">
            <label>환경 변수 ID</label>

            <input type="text" placeholder="ID를 입력하세요" />
          </div>

          <div className="form-group">
            <label>환경 변수명</label>

            <input type="text" placeholder="변수명을 입력하세요" />
          </div>

          <button className="blue-btn">+ 추가</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>환경 변수 ID</th>
              <th>환경 변수명</th>
            </tr>
          </thead>

          <tbody>
            {parentList.map((item) => (
              <tr
                key={item.id}
                className={selectedParent === item.id ? "active-row" : ""}
                onClick={() => setSelectedParent(item.id)}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ENVParent;
