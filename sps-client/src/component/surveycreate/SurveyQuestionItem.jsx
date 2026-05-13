const questionType = ["척도형", "입력형", "선택형"];
const countOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ScaleOptions = ({ question, onScaleCountChange, onScaleLabelChange }) => {
  const { id, scaleCount, scaleLabels = [] } = question;

  return (
    <div className="question-sub">
      <div className="sub-field">
        <span className="sub-label">척도 항목 수</span>
        <select
          className="sub-select"
          value={scaleCount}
          onChange={(e) => onScaleCountChange(id, Number(e.target.value))}
        >
          {countOption.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="sub-field scale-labels-field">
        <span className="sub-label">척도 명 ({scaleCount}개)</span>
        <div className="scale-labels-row">
          {scaleLabels.map((label, idx) => (
            <input
              key={idx}
              className="sub-input scale-label-input"
              type="text"
              placeholder={`${idx + 1}번`}
              value={label}
              onChange={(e) => onScaleLabelChange(id, idx, e.target.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const InputOptions = ({ question, onQuestionChange }) => {
  const { id, answerText } = question;

  return (
    <div className="question-sub">
      <input
        className="answer-textarea"
        value={answerText}
        onChange={(e) => onQuestionChange(id, "answerText", e.target.value)}
      />
    </div>
  );
};

const SelectOptions = ({
  question,
  onOptionAdd,
  onOptionChange,
  onOptionDelete,
}) => {
  const { id, options } = question;

  return (
    <div className="question-sub">
      <div className="options-col">
        {options.map((opt, idx) => (
          <div key={idx} className="option-row">
            <input type="checkbox" />
            <input
              className="sub-input option-input"
              type="text"
              placeholder={`선택값 ${idx + 1}`}
              value={opt}
              onChange={(e) => onOptionChange(id, idx, e.target.value)}
            />
            <button
              className="btn-option-delete"
              onClick={() => onOptionDelete(id, idx)}
            >
              ×
            </button>
          </div>
        ))}
        <button className="btn btn-option-add" onClick={() => onOptionAdd(id)}>
          선택값 추가
        </button>
      </div>
    </div>
  );
};

const SurveyQuestionItem = ({
  question,
  questionNumber,
  onQuestionChange,
  onQuestionTypeChange,
  onScaleCountChange,
  onScaleLabelChange,
  onOptionAdd,
  onOptionChange,
  onOptionDelete,
  onQuestionDelete,
}) => {
  const { id, type, text } = question;

  return (
    <div className="question-item">
      <div className="question-num">
        <span>Q{questionNumber}</span>
      </div>

      <div className="question-body">
        <div className="question-top">
          <select
            className="type-select"
            value={type}
            onChange={(e) => onQuestionTypeChange(id, e.target.value)}
          >
            {questionType.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <input
            className="question-text-input"
            type="text"
            placeholder="질문 내용을 입력하세요"
            value={text}
            onChange={(e) => onQuestionChange(id, "text", e.target.value)}
          />

          <div className="question-actions">
            <button
              className="btn btn-delete"
              onClick={() => onQuestionDelete(id)}
            >
              삭제
            </button>
          </div>
        </div>

        {type === "척도형" && (
          <ScaleOptions
            question={question}
            onScaleCountChange={onScaleCountChange}
            onScaleLabelChange={onScaleLabelChange}
          />
        )}
        {type === "입력형" && (
          <InputOptions
            question={question}
            onQuestionChange={onQuestionChange}
          />
        )}
        {type === "선택형" && (
          <SelectOptions
            question={question}
            onOptionAdd={onOptionAdd}
            onOptionChange={onOptionChange}
            onOptionDelete={onOptionDelete}
          />
        )}
      </div>
    </div>
  );
};

export default SurveyQuestionItem;
