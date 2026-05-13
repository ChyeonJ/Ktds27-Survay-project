const InfoChange = () => {
  return (
    <>
      <h2>{} 변경</h2>
      <div>
        <span>기존 {}</span>
        <span>{/* 기존 {회원명/회사명} */}</span>
      </div>
      <div>
        <span>새로운 {}</span>
        <input type="text" placeholder="변경할 {회원명/회사명}을 입력하세요." />
      </div>
      <div>
        <button>취소</button>
        <button>변경</button>
      </div>
    </>
  );
};

export default InfoChange;
