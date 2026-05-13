import ContentArea from "./ContentArea";
import "./css/index.css";

const surveys = [
  {
    id: 1,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 2,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "응답 중",
    action: "응답 중",
  },
  {
    id: 3,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 4,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 5,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 6,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 7,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
  {
    id: 8,
    title: "2026 서비스 만족도 조사",
    period: "2024-06-01 ~ 2024-06-30",
    status: "미참여",
    action: "응답하기",
  },
];

const Main = () => {
  return (
    <div className="survey-wrapper">
      <h2 className="page-title">진행중 설문 조회</h2>
      <ContentArea surveys={surveys} />
    </div>
  );
};

export default Main;
