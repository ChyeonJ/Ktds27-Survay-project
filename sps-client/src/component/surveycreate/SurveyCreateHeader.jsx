const fieldOption = ["a", "b", "c", "d", "e"];

const SurveyCreateHeader = ({ surveyInfo, onSurveyInfoChange }) => {
  const { name, field, startDate, endDate, expectedTime } = surveyInfo;

  return (
    <div className="create-header">
      <div className="header-field">
        <span className="field-label">설문형</span>
        <input
          className="field-input"
          type="text"
          value={name}
          onChange={(e) => onSurveyInfoChange("name", e.target.value)}
        />
      </div>

      <div className="header-divider" />

      <div className="header-field">
        <span className="field-label">설문 분야</span>
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
        <span className="field-label">설문 기간</span>
        <div className="date-range">
          <input
            className="field-input date-input"
            type="date"
            value={startDate}
            onChange={(e) => onSurveyInfoChange("startDate", e.target.value)}
          />
          <span className="date-separator">~</span>
          <input
            className="field-input date-input"
            type="date"
            value={endDate}
            onChange={(e) => onSurveyInfoChange("endDate", e.target.value)}
          />
        </div>
      </div>

      <div className="header-divider" />

      <div className="header-field">
        <span className="field-label">예상 완료 시간</span>
        <input
          className="field-input date-input"
          type="time"
          value={expectedTime}
          onChange={(e) => onSurveyInfoChange("expectedDate", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SurveyCreateHeader;
