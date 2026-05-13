import "../css/inquiryview.css";

export default function AnswerDetail({ detail }) {
  return (
    <div className="detail-box">
      <div className="detail-grid">
        <div className="detail-row">
          <span className="detail-label">문의 등록자</span> {detail.author}
        </div>
        <div className="detail-row">
          <span className="detail-label">회사명</span> {detail.company}
        </div>
        <div className="detail-row">
          <span className="detail-label">등록일</span> {detail.regDate}
        </div>
        <div className="detail-row">
          <span className="detail-label">답변 횟수</span> {detail.replyCount}회
        </div>
      </div>

      <div>
        <span
          className={`badge ${detail.status === "WAIT" ? "badge-wait" : "badge-done"}`}
        >
          {detail.status === "WAIT" ? "답변 대기" : "답변 완료"}
        </span>
      </div>
    </div>
  );
}
