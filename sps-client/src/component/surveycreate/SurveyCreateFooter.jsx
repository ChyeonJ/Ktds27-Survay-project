const SurveyCreateFooter = ({ onSaveButtonClick, onCancelButtonClick }) => {
  return (
    <div className="create-footer">
      <button className="btn btn-cancel" onClick={onCancelButtonClick}>
        취소
      </button>
      <button className="btn btn-save" onClick={onSaveButtonClick}>
        저장
      </button>
    </div>
  );
};

export default SurveyCreateFooter;
