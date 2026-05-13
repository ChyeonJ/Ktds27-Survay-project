import { useState } from "react";
import "../../Inquiry/css/inquiry.css";
import { InquirySearch } from "../InquirySearch";
import { InquiryTable } from "../InquiryTable";

const InquiryAdminPage = () => {
  const [inquiryList, setInquiryList] = useState([
    {
      id: 1,
      categoryName: "계정 관련",
      status: "WAIT",

      answerDate: "",
      waitDays: 2,

      company: "어라(주)",
      writer: "김*무",

      registerDate: "2026-04-31 13:01:24",

      answerWriter: "관리자 A",

      title: "로그인이 안됩니다",
    },
    {
      id: 1,
      categoryName: "계정 관련",
      status: "complete",

      answerDate: "2026-05-05 13:01:24",
      waitDays: 2,

      company: "어라(주)",
      writer: "김*무",

      registerDate: "2026-04-31 13:01:24",

      answerWriter: "관리자 A",

      title: "로그인이 안됩니다",
    },
  ]);

  return (
    <div className="inquiry-admin-page">
      <InquirySearch />

      <InquiryTable inquiryList={inquiryList} />
    </div>
  );
};

export default InquiryAdminPage;
