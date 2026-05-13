export const FaqRegisterList = ({
  faqList,
  selectCategory,
  RegisterClickHandler,
}) => {
  return (
    <>
      {faqList
        .filter((faq) => {
          return faq.envId === selectCategory && faq.display === "Y";
        })
        .map((faq) => (
          <div className="faq-item" key={faq.id}>
            <button onClick={() => RegisterClickHandler(faq.id)}>
              등록해제
            </button>
            <div>{faq.question}</div>

            <div>{faq.answer}</div>
          </div>
        ))}
    </>
  );
};
