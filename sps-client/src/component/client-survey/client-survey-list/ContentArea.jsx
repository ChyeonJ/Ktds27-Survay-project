import InfoBox from "./InfoBox";
import SearchArea from "./SearchArea";
import SurveyTableArea from "./SurveyTableArea";

const ContentArea = ({ surveys }) => {
  return (
    <section className="content-area">
      <SearchArea />
      <SurveyTableArea surveys={surveys} />
      <InfoBox />
    </section>
  );
};

export default ContentArea;
