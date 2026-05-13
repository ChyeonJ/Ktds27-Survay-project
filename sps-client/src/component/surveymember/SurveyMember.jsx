import { useState } from "react";
import SurveyMemberHeader from "./SurveyMemberHeader";
import SurveyMemberList from "./SurveyMemberList";

const SurveyMember = () => {
  const [{ surveyInfo }, setSurveyData] = useState({
    surveyInfo: {
      name: " ",
      field: " ",
    },
  });
  const onSurveyInfoChangeHandler = (field, value) => {
    setSurveyData((prevData) => ({
      ...prevData,
      surveyInfo: { ...prevData.surveyInfo, [field]: value },
    }));
  };
  const onClickResetHandler = () => {
    setSurveyData((prevData) => ({
      ...prevData,
      surveyInfo: { ...prevData.surveyInfo, name: " ", field: " " },
    }));
  };

  return (
    <>
      <div className="create-page">
        <SurveyMemberHeader
          surveyInfo={surveyInfo}
          onSurveyInfoChange={onSurveyInfoChangeHandler}
          onClickReset={onClickResetHandler}
        />
      </div>
      <div className="create-page">
        <SurveyMemberList />
      </div>
    </>
  );
};
export default SurveyMember;
