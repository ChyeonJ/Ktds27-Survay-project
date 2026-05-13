import { Link } from "react-router-dom";

export const InquiryTable = ({ inquiryList }) => {
  const getWaitDays = (registerDate, answerDate, status) => {
    const startDate = new Date(registerDate);

    const endDate = status === "WAIT" ? new Date() : new Date(answerDate);

    const diffTime = endDate.getTime() - startDate.getTime();

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  return (
    <table className="inquiry-table">
      <thead>
        <tr>
          <th>순번</th>
          <th>문의 유형</th>
          <th>답변 상태</th>
          <th>답변 등록 일시</th>
          <th>답변 등록 대기일</th>
          <th>회사</th>
          <th>문의자</th>
          <th>문의 등록 일시</th>
          <th>답변 등록자</th>
          <th>문의 제목</th>
        </tr>
      </thead>

      <tbody>
        {inquiryList.map((inquiry, number) => (
          <tr
            key={inquiry.id}
            className={inquiry.status === "WAIT" ? "wait-row" : ""}
          >
            <td>{number + 1}</td>

            <td>{inquiry.categoryName}</td>

            <td>{inquiry.status === "WAIT" ? "답변 대기" : "답변 완료"}</td>

            <td>{inquiry.answerDate}</td>

            <td>
              {getWaitDays(
                inquiry.registerDate,
                inquiry.answerDate,
                inquiry.status,
              )}
              일
            </td>

            <td>{inquiry.company}</td>

            <td>{inquiry.writer}</td>

            <td>{inquiry.registerDate}</td>

            <td>{inquiry.answerWriter}</td>

            <td className="inquiry-title">
              <Link to={`/admin/inquiry/${inquiry.id}`}>{inquiry.title}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
