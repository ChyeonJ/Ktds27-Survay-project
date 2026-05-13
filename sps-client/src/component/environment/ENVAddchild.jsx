function ENVAddchild({ selectedParentName }) {
  return (
    <div className="card add-card">
      <h2>
        하위 분류 추가
        <span>({selectedParentName})</span>
      </h2>

      <div className="add-form">
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
    </div>
  );
}

export default ENVAddchild;
