import { useState } from "react";
import "./SurveyCreate.css";
import SurveyCreateHeader from "./SurveyCreateHeader.jsx";
import SurveyQuestionList from "./SurveyQuestionList.jsx";
import SurveyCreateFooter from "./SurveyCreateFooter.jsx";

const SurveyCreate = () => {
  const [{ surveyInfo, questions }, setSurveyData] = useState({
    surveyInfo: {
      name: " ",
      field: " ",
      startDate: "",
      endDate: "",
      expectedDate: "",
    },
    questions: [
      {
        id: 1,
        type: "척도형",
        scaleCount: 1,
        scaleLabels: [""],
      },
      {
        id: 2,
        type: "입력형",
        answerText: "",
      },
      {
        id: 3,
        type: "선택형",
        options: [],
      },
    ],
  });

  const onSurveyInfoChangeHandler = (field, value) => {
    setSurveyData((prevData) => ({
      ...prevData,
      surveyInfo: { ...prevData.surveyInfo, [field]: value },
    }));
  };

  const onQuestionAddButtonClickHandler = () => {
    const newQuestion = {
      id: Date.now(),
      type: "척도형",
      text: "",
      scaleCount: 1,
      scaleName: "",
      scaleLabels: [""],
    };
    setSurveyData((prevData) => ({
      ...prevData,
      questions: [...prevData.questions, newQuestion],
    }));
    console.log("질문 추가");
  };

  const onQuestionChangeHandler = (id, field, value) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) =>
        q.id === id ? { ...q, [field]: value } : q
      ),
    }));
  };

  const onQuestionTypeChangeHandler = (id, newType) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id !== id) return q;
        const base = { id: q.id, type: newType, text: q.text };
        if (newType === "척도형") return { ...base, scaleCount: 1, scaleLabels: ["", "", "", "", ""] };
        if (newType === "입력형") return { ...base, answerText: "" };
        if (newType === "선택형") return { ...base, options: [] };
        return base;
      }),
    }));
  };

  const onScaleCountChangeHandler = (id, newCount) => {
    const count = Number(newCount);
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id !== id) return q;
        const prevLabels = q.scaleLabels || [];
        const newLabels = Array(count)
          .fill("")
          .map((_, i) => prevLabels[i] || "");
        return { ...q, scaleCount: count, scaleLabels: newLabels };
      }),
    }));
  };
 
  const onScaleLabelChangeHandler = (id, idx, value) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id !== id) return q;
        const newLabels = q.scaleLabels.map((label, i) =>
          i === idx ? value : label
        );
        return { ...q, scaleLabels: newLabels };
      }),
    }));
  };

  const onOptionAddButtonClickHandler = (id) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) =>
        q.id === id ? { ...q, options: [...q.options, ""] } : q
      ),
    }));
  };

  const onOptionChangeHandler = (id, optionIdx, value) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id !== id) return q;
        const newOptions = q.options.map((opt, i) =>
          i === optionIdx ? value : opt
        );
        return { ...q, options: newOptions };
      }),
    }));
  };
  const onOptionDeleteButtonClickHandler = (id, optionIdx) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((q) => {
        if (q.id !== id) return q;
        return { ...q, options: q.options.filter((_, i) => i !== optionIdx) };
      }),
    }))
  };

  const onQuestionDeleteButtonClickHandler = (id) => {
    setSurveyData((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter((q) => q.id !== id),
    }));
    console.log("질문 삭제:", id);
  };

  const onSaveButtonClickHandler = () => {
    console.log("저장:", { surveyInfo, questions });
  };

  const onCancelButtonClickHandler = () => {
    console.log("취소");
  };

  return (
    <div className="create-page">
      <SurveyCreateHeader
        surveyInfo={surveyInfo}
        onSurveyInfoChange={onSurveyInfoChangeHandler}
      />
      <SurveyQuestionList
        questions={questions}
        onQuestionAdd={onQuestionAddButtonClickHandler}
        onQuestionChange={onQuestionChangeHandler}
        onQuestionTypeChange={onQuestionTypeChangeHandler}
         onScaleCountChange={onScaleCountChangeHandler}
        onScaleLabelChange={onScaleLabelChangeHandler}
        onOptionAdd={onOptionAddButtonClickHandler}
        onOptionChange={onOptionChangeHandler}
        onOptionDelete={onOptionDeleteButtonClickHandler}
        onQuestionDelete={onQuestionDeleteButtonClickHandler}
      />
      <SurveyCreateFooter
        onSaveButtonClick={onSaveButtonClickHandler}
        onCancelButtonClick={onCancelButtonClickHandler}
      />
    </div>
  );
};

export default SurveyCreate;