const SurveyFooter = ({ nextStatus, onNextStatusButtonClick }) => {
  return (
    <div className="page-footer">
      <button className="btn btn-outline">목록으로</button>
      <div className="footer-right">
        <button className="btn btn-save">저장</button>
        {nextStatus && (
          <button
            className="btn btn-next-status"
            onClick={onNextStatusButtonClick}
          >
            {nextStatus}으로 변경
          </button>
        )}
      </div>
    </div>
  );
};

export default SurveyFooter;
