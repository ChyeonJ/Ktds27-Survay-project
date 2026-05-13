import { useSelector } from "react-redux";

export const FaqSidebar = ({
  selectCategory,
  setSelectCategory,
  isAdmin,
  openModal,
}) => {
  const categoryList = useSelector((state) => state.category.categoryList);
  return (
    <div className="faq-category-box">
      {isAdmin && (
        <button className="faq-category-add-button" onClick={openModal}>
          분야 추가
        </button>
      )}
      {categoryList.map((category) => (
        <div
          key={category.id}
          className={
            selectCategory === category.id
              ? "faq-category active"
              : "faq-category"
          }
          onClick={() => setSelectCategory(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};
