import { useState } from "react";
import "./SurveyStatusModal.css";
import SurveyHeader from "./SurveyHeader.jsx";
import SurveySection from "./SurveySection.jsx";
import SurveyFooter from "./SurveyFooter.jsx";
import StatusModal from "./StatusModal.jsx";

const statusFlow = ["작성중", "진행중", "완료"];

const getNextStatus = (current) => {
  const idx = statusFlow.indexOf(current);
  return idx < statusFlow.length - 1 ? statusFlow[idx + 1] : null;
};

const SurveyPage = () => {
  const [{ currentStatus, isModalOpen }, setSurveyState] = useState({
    currentStatus: "작성중",
    isModalOpen: false,
  });

  const nextStatus = getNextStatus(currentStatus);

  const onNextStatusButtonClickHandler = () => {
    setSurveyState((prevData) => ({ ...prevData, isModalOpen: true }));
  };

  const onConfirmButtonClickHandler = () => {
    setSurveyState((prevData) => ({
      ...prevData,
      currentStatus: nextStatus,
      isModalOpen: false,
    }));
  };

  const onCancelButtonClickHandler = () => {
    setSurveyState((prevData) => ({ ...prevData, isModalOpen: false }));
  };

  return (
    <div className="page">
      <SurveyHeader
        surveyName="복지 제도 만족도 조사"
        currentStatus={currentStatus}
      />
      <SurveySection />
      <SurveyFooter
        nextStatus={nextStatus}
        onNextStatusButtonClick={onNextStatusButtonClickHandler}
      />
      {isModalOpen && (
        <StatusModal
          currentStatus={currentStatus}
          nextStatus={nextStatus}
          onConfirmButtonClick={onConfirmButtonClickHandler}
          onCancelButtonClick={onCancelButtonClickHandler}
        />
      )}
    </div>
  );
};

export default SurveyPage;
