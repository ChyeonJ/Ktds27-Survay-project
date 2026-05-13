const SurveyTableArea = ({ surveys }) => {
  return (
    <div className="survey-table-area">
      <table>
        <thead>
          <tr>
            <th>설문 제목</th>
            <th>기간</th>
            <th>참여 상태</th>
            <th>동작</th>
          </tr>
        </thead>

        <tbody>
          {surveys.map((survey) => (
            <tr key={survey.id}>
              <td>{survey.title}</td>
              <td>{survey.period}</td>
              <td>
                <span
                  className={
                    survey.status === "응답 중"
                      ? "status-badge progress"
                      : "status-badge"
                  }
                >
                  {survey.status}
                </span>
              </td>
              <td>
                <button
                  type="button"
                  className={
                    survey.action === "응답 중"
                      ? "action-button outline"
                      : "action-button"
                  }
                >
                  {survey.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SurveyTableArea;
