const SurveyHeader = ({ surveyName, currentStatus }) => {
  return (
    <div className="page-header">
      <div className="header-left">
        <span className="header-label">설문명</span>
        <span className="header-value">{surveyName}</span>
      </div>
      <div className="header-right">
        <span className="header-label">상태</span>
        <span className={`status-badge status-${currentStatus}`}>
          {currentStatus}
        </span>
      </div>
    </div>
  );
};

export default SurveyHeader;
