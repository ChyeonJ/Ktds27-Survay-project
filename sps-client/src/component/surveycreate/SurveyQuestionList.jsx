import SurveyQuestionItem from "./SurveyQuestionItem.jsx";

const SurveyQuestionList = ({
  questions,
  onQuestionAdd,
  onQuestionChange,
  onQuestionTypeChange,
  onScaleCountChange,
  onScaleLabelChange,
  onOptionAdd,
  onOptionChange,
  onOptionDelete,
  onQuestionDelete,
}) => {
  return (
    <div className="question-section">
      <div className="question-section-header">
        <span className="section-title">설문 문항 구성</span>
        <button className="btn btn-add" onClick={onQuestionAdd}>
          질문 추가
        </button>
      </div>

      <div className="question-list">
        {questions.map((question, idx) => (
          <SurveyQuestionItem
            key={question.id}
            question={question}
            questionNumber={idx + 1}
            onQuestionChange={onQuestionChange}
            onQuestionTypeChange={onQuestionTypeChange}
            onScaleCountChange={onScaleCountChange}
            onScaleLabelChange={onScaleLabelChange}
            onOptionAdd={onOptionAdd}
            onOptionChange={onOptionChange}
            onOptionDelete={onOptionDelete}
            onQuestionDelete={onQuestionDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default SurveyQuestionList;