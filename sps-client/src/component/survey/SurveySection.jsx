const SurveySection = () => {
  return (
    <div className="survey-section">
      <div className="section-header">
        <span className="section-title">설문 문항</span>
        <div className="section-btns">
          <button className="btn btn-outline">문항 추가</button>
          <button className="btn btn-outline">옵션 추가</button>
        </div>
      </div>

      <div className="question-card">
        <div className="question-tag">
          <span>Q3</span>
          <span>선택형</span>
        </div>
        <div className="question-content">
          <div className="question-top">
            <p className="question-text">
              향후 추가되었으면 하는 복지 제도는 무엇입니까? (복수 선택 가능)
            </p>
            <div className="question-actions">
              <button className="btn btn-outline">수정</button>
              <button className="btn btn-delete">삭제</button>
            </div>
          </div>
          <div className="options-list">
            {[
              "주택 대출 지원",
              "자녀 교육비 지원",
              "건강 검진 확대",
              "휴가 확대",
            ].map((opt) => (
              <label key={opt} className="option-item">
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            ))}
            <label className="option-item">
              <input type="checkbox" />
              <span>기타 (직접 입력)</span>
              <input
                type="text"
                className="option-text-input"
                placeholder="기타 내용 입력"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveySection;
