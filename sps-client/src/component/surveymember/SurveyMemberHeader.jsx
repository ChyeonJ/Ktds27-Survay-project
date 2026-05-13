const fieldOption = ["전체", "참여", "미참여"];
const SurveyMemberHeader = ({
  surveyInfo,
  onSurveyInfoChange,
  onClickReset,
}) => {
  const { name, field } = surveyInfo;
  return (
    <div className="create-header">
      <div className="header-field">
        <span className="field-label">참여 여부</span>
        <select
          className="field-select"
          value={field}
          onChange={(e) => onSurveyInfoChange("field", e.target.value)}
        >
          {fieldOption.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="header-divider" />
      <div className="header-field">
        <span className="field-label">참여 회사 명</span>
        <input
          className="field-input"
          type="text"
          value={name}
          onChange={(e) => onSurveyInfoChange("name", e.target.value)}
        />
      </div>
      <div className="header-divider" />
      <div className="header-field">
        <span className="field-label">회원명</span>
        <input
          className="field-input"
          type="text"
          value={field}
          onChange={(e) => onSurveyInfoChange("field", e.target.value)}
        />
      </div>
      <div className="header-field">
        <div className="header-field">
          <button className="btn">검색</button>
        </div>
      </div>
      <div className="header-field">
        <button className="btn" onClick={onClickReset}>
          초기화
        </button>
      </div>
    </div>
  );
};
export default SurveyMemberHeader;
