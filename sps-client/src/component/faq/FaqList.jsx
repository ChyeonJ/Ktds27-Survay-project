import { useState } from "react";

export const FaqList = ({ faqList, selectCategory }) => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {faqList
        .filter((faq) => {
          return faq.envId === selectCategory && faq.display === "Y";
        })
        .map((faq) => (
          <div className="faq-item" key={faq.id}>
            <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
              {faq.question}
            </div>

            {openId === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
    </>
  );
};
