import { useState } from "react";
import "./css/inquiryview.css";
import AnswerDetail from "./answerdetail/AnswerDetail";
import AnswerBox from "./answerbox/AnswerBox";
import FileUpload from "./fileupload/FileUpload";

function SurveyAnswer() {
  const [userInfo] = useState({
    author: "김*당",
    company: "가나다라마바사 (주)",
    regDate: "2026-04-26 13:01:21",
    replyCount: 2,
    status: "답변 대기",
  });
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "김*당",
      date: "2026-04-26",
      isAdmin: false,
      content:
        "내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용",
    },
    {
      id: 2,
      author: "관리자 A",
      date: "2026-04-26",
      isAdmin: true,
      badge: "답변 완료",
      content:
        "내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용",
    },
    {
      id: 3,
      author: "김*당",
      date: "2026-04-26",
      isAdmin: false,
      badge: "답변 대기",
      content:
        "내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용\n내용내용내용내용내용내용내용내용",
    },
  ]);
  return (
    <div className="view-wrap">
      <div className="view-box">
        <h2 className="main-title">문의 답변 조회</h2>
        <AnswerDetail detail={userInfo} />
        <AnswerBox messages={messages} />
        <form className="reply-box">
          <textarea
            className="reply-textarea"
            placeholder="답변 내용을 입력해주세요"
            rows="4"
          />

          <div className="reply-footer">
            <FileUpload files={[]} setFiles={null} mode="button" />
            <button type="submit" className="btn-submit ml-2">
              답변 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SurveyAnswer;
