const TableArea = () => {
  return (
    <div className="table-area">
      <table>
        <thead>
          <tr>
            <th>설문 번호</th>
            <th>설문명</th>
            <th>문항수</th>
            <th>예상 설문 시간</th>
            <th>진행 여부</th>
            <th>참여율</th>
            <th>설문기간</th>
            <th>등록일</th>
            <th>등록자</th>
            <th>참여자 수</th>
            <th>상태</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="11" className="empty-row">
              등록된 설문이 없습니다.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableArea;
