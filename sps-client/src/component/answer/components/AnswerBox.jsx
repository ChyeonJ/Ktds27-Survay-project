import "../css/inquiryview.css";

export default function AnswerBox({ messages }) {
  return (
    <div className="timeline">
      {messages.map((msg) => (
        <div key={msg.id} className="timeline-item">
          {/* 타임라인 원형 노드 */}
          <div className="timeline-node"></div>

          {/* 메시지 본문 박스 (관리자 여부에 따라 클래스 추가) */}
          <div className={`msg-box ${msg.isAdmin ? "admin" : ""}`}>
            <div className="msg-header">
              <div className="msg-info">
                <span className="msg-author">{msg.author}</span>
                <span className="msg-date">{msg.date}</span>
              </div>

              {/* 개별 뱃지 상태가 있을 경우 표시 */}
              {msg.badge && (
                <span
                  className={`badge ${msg.badge === "답변 완료" ? "badge-done" : "badge-wait"}`}
                >
                  {msg.badge}
                </span>
              )}
            </div>
            <div className="msg-body">{msg.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
