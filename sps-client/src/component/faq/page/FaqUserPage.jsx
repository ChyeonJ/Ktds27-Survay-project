import { useState } from "react";
import "../../template/css/faq.css";
import { FaqSidebar } from "../FaqSidebar";
import { FaqSearch } from "../FaqSearch";
import { FaqList } from "../FaqList";

const FaqUserPage = () => {
  const [selectCategory, setSelectCategory] = useState(1);

  const [faqList] = useState([
    {
      id: 1,
      envId: 1,
      question: "비밀번호 변경방법",
      answer: "담당자에게 문의하세요",
      display: "Y",
    },
    {
      id: 2,
      envId: 2,
      question: "설문 방법",
      answer: "담당자에게 문의하세요",
      display: "Y",
    },
    {
      id: 3,
      envId: 3,
      question: "교육 방법",
      answer: "담당자에게 문의하세요",
      display: "Y",
    },
  ]);

  return (
    <div className="faq-user-page">
      <FaqSidebar
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />

      <div className="faq-main">
        <FaqSearch />

        <FaqList faqList={faqList} selectCategory={selectCategory} />
      </div>
    </div>
  );
};

export default FaqUserPage;
