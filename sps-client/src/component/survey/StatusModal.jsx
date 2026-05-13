import EmailPreview from "./EmailPreview.jsx";

const StatusModal = ({ currentStatus, nextStatus, onConfirmButtonClick, onCancelButtonClick }) => {
  return (
    <div className="modal-overlay" onClick={onCancelButtonClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">설문 상태 변경 확인</h3>

        <div className="status-transition">
          <div className="status-item">
            <span className="status-label">현재 상태</span>
            <span className={`status-badge status-${currentStatus}`}>
              {currentStatus}
            </span>
          </div>
          <span className="transition-arrow">→</span>
          <div className="status-item">
            <span className="status-label">변경 대상 상태</span>
            <span className={`status-badge status-${nextStatus}`}>
              {nextStatus}
            </span>
          </div>
        </div>

        {nextStatus === "진행중" && (
          <>
            <div className="warning-box">
              <span className="warning-icon">⚠</span>
              <span>
                진행중으로 변경 시, 등록된 모든 회원에게 설문 참여 안내
                이메일이 발송됩니다.
                <br />
                이메일 발송 후에는 설문 내용을 수정할 수 없습니다.
              </span>
            </div>
            <EmailPreview />
          </>
        )}

        {nextStatus === "완료" && (
          <div className="warning-box info-box">
            <span className="warning-icon">ℹ</span>
            <span>
              완료 상태로 변경 시 설문 참여가 마감됩니다. 이후 설문을 다시
              진행하려면 새 설문을 등록해야 합니다.
            </span>
          </div>
        )}

        <div className="modal-actions">
          <button className="btn btn-cancel" onClick={onCancelButtonClick}>
            취소
          </button>
          <button className="btn btn-confirm" onClick={onConfirmButtonClick}>
            {nextStatus === "진행중" ? "상태 변경 및 이메일 발송" : "상태 변경"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
