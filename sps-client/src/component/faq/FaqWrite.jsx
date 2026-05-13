import { useEffect, useRef } from "react";

export const FaqWrite = ({
  selectCategory,
  addFaq,
  setEditFaq,
  editFaq,
  updateFaq,
  isOpen,
  setIsOpen,
}) => {
  const questionRef = useRef();

  const answerRef = useRef();

  useEffect(() => {
    if (editFaq) {
      questionRef.current.value = editFaq.question;

      answerRef.current.value = editFaq.answer;
    }
  }, [editFaq]);

  const onSaveButtonClickHandler = () => {
    const question = questionRef.current.value;

    const answer = answerRef.current.value;

    const faqData = {
      id: editFaq ? editFaq.id : Date.now(),
      envId: selectCategory,
      question,
      answer,
      display: editFaq ? editFaq.display : "N",
    };

    if (editFaq) {
      updateFaq(faqData);

      setEditFaq(null);

      questionRef.current.value = "";

      answerRef.current.value = "";

      setIsOpen(false);
    } else {
      addFaq(faqData);

      questionRef.current.value = "";

      answerRef.current.value = "";
    }

    setEditFaq(null);
  };

  const onCloseButtonClickHandler = () => {
    setIsOpen(false);

    setEditFaq(null);

    questionRef.current.value = "";

    answerRef.current.value = "";
  };

  return (
    <div className="faq-write">
      <div className="faq-write-button-box">
        <button className="faq-write-button" onClick={() => setIsOpen(true)}>
          작성
        </button>
      </div>

      {isOpen && (
        <div className="faq-write-form">
          <div className="faq-write-header">
            <h3>{editFaq ? "FAQ 수정" : "FAQ 작성"}</h3>

            <button onClick={onCloseButtonClickHandler}>X</button>
          </div>

          <div className="faq-write-body">
            <input type="text" placeholder="질문 입력" ref={questionRef} />

            <textarea placeholder="답변 입력" ref={answerRef}></textarea>

            <button
              className="faq-submit-button"
              onClick={onSaveButtonClickHandler}
            >
              등록
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
