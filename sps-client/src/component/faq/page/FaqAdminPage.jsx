import { useState } from "react";
import "../../template/css/faq.css";
import { FaqSearch } from "../FaqSearch";
import { FaqSidebar } from "../FaqSidebar";
import { FaqWrite } from "../FaqWrite";
import { FaqAdminList } from "../FaqAdminList";
import { FaqRegisterList } from "../FaqRegisterList";
import { FaqModal } from "../FaqModal";

const FaqAdminPage = () => {
  const [selectCategory, setSelectCategory] = useState(1);

  const [editFaq, setEditFaq] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [parentEnvId, setParentEnvId] = useState("0200");

  const [faqList, setFaqList] = useState([
    {
      id: 1,
      envId: 1,
      question: "비밀번호 변경방법",
      answer: "담당자에게 문의하세요",
      display: "Y",
    },
    {
      id: 2,
      envId: 1,
      question: "로그인 방법",
      answer: "로그인 후 이용하세요",
      display: "N",
    },
    {
      id: 3,
      envId: 2,
      question: "설문 방법",
      answer: "설문 페이지에서 가능합니다",
      display: "Y",
    },
  ]);

  const [categoryList, setCategoryList] = useState([
    { id: 1, name: "로그인 관련" },
    { id: 2, name: "설문 관련" },
    { id: 3, name: "교육 관련" },
  ]);

  const addCategory = (newCategory) => {
    setCategoryList((prev) => [...prev, newCategory]);
  };

  const addFaq = (newFaq) => {
    setFaqList((prev) => [...prev, newFaq]);
  };

  const updateFaq = (faqData) => {
    setFaqList((prev) =>
      prev.map((faq) => (faq.id === faqData.id ? faqData : faq)),
    );
  };

  const onRegisterClickHandler = (id) => {
    setFaqList((prev) =>
      prev.map((faq) =>
        faq.id === id
          ? { ...faq, display: faq.display === "Y" ? "N" : "Y" }
          : faq,
      ),
    );
    console.log(faqList);
  };

  return (
    <div className="faq-admin-page">
      {/* 왼쪽 */}
      <div className="faq-admin-left">
        <FaqSearch />
        <FaqWrite
          selectCategory={selectCategory}
          addFaq={addFaq}
          editFaq={editFaq}
          setEditFaq={setEditFaq}
          updateFaq={updateFaq}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className="faq-admin-list">
          <div>FAQ 목록들</div>
          <FaqAdminList
            setEditFaq={setEditFaq}
            faqList={faqList}
            setFaqList={setFaqList}
            selectCategory={selectCategory}
            RegisterClickHandler={onRegisterClickHandler}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="faq-admin-right">
        <div className="faq-sidebar">
          <FaqSidebar
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            isAdmin={true}
            categoryList={categoryList}
            openModal={() => setModalOpen(true)}
          />
          {modalOpen && (
            <FaqModal
              parentEnvId={parentEnvId}
              addCategory={addCategory}
              categoryList={categoryList}
              closeModal={() => setModalOpen(false)}
            />
          )}
        </div>
        <div className="faq-admin-register">
          <div>등록된 FAQ 목록</div>

          <FaqRegisterList
            faqList={faqList}
            selectCategory={selectCategory}
            RegisterClickHandler={onRegisterClickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default FaqAdminPage;
