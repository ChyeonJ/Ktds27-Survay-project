import { useSelector } from "react-redux";

export const InquirySearch = () => {
  const categoryList = useSelector((state) => state.category.categoryList);

  return (
    <div className="inquiry-search-box">
      <select>
        <option value="">전체</option>

        {categoryList.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">전체 상태</option>
        <option value="WAIT">답변 대기</option>
        <option value="COMPLETE">답변 완료</option>
      </select>

      <input placeholder="문의 제목 입력" />

      <input placeholder="문의 등록자 입력" />

      <button>검색</button>
    </div>
  );
};
