import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../toolkit/slices/categorySlice";

export const FaqModal = ({ closeModal, parentEnvId }) => {
  const [envId, setEnvId] = useState("");
  const [envName, setEnvName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatcher = useDispatch();

  const categoryList = useSelector((store) => store.category.categoryList);

  const handleAdd = () => {
    const isDuplicate = categoryList.some(
      (category) => category.id === parseInt(envId),
    );

    if (isDuplicate) {
      setErrorMessage("이미 존재하는 분야 아이디입니다.");
      return;
    }

    const newCategory = {
      id: parseInt(envId),
      name: envName,
      parentEnvId,
    };

    dispatcher(categoryActions.addCategory(newCategory));

    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>분야 추가</h3>
        <input value={parentEnvId} disabled />
        <input
          value={envId}
          onChange={(e) => setEnvId(e.target.value)}
          placeholder="분야 아이디"
        />
        {errorMessage && (
          <div className="modal-error-message">{errorMessage}</div>
        )}
        <input
          value={envName}
          onChange={(e) => setEnvName(e.target.value)}
          placeholder="분야 이름 입력"
        />

        <div className="modal-button-box">
          <button onClick={closeModal}>취소</button>
          <button onClick={handleAdd}>추가</button>
        </div>
      </div>
    </div>
  );
};
