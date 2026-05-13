export const FaqAdminList = ({
  faqList,
  RegisterClickHandler,
  selectCategory,
  setFaqList,
  setEditFaq,
  setIsOpen,
}) => {
  const onDeleteHandler = (id) => {
    setFaqList((prev) => prev.filter((faq) => faq.id !== id));
    setEditFaq((prev) => {
      if (prev?.id === id) {
        setIsOpen(false);
        return null;
      }

      return prev;
    });
  };

  return (
    <>
      {faqList
        .filter((faq) => {
          return faq.envId === selectCategory;
        })
        .map((faq) => (
          <div className="faq-item" key={faq.id}>
            {faq.display !== "Y" && (
              <button onClick={() => RegisterClickHandler(faq.id)}>등록</button>
            )}
            <button
              onClick={() => {
                setEditFaq(faq);
                setIsOpen(true);
              }}
            >
              수정
            </button>
            <button onClick={() => onDeleteHandler(faq.id)}>삭제</button>
            <div>{faq.question}</div>
            <div>{faq.answer}</div>
          </div>
        ))}
    </>
  );
};
