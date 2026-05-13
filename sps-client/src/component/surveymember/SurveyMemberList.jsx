const SurveyMemberList = () => {
  return (
    <div>
      <table>
        <thead>
          <td>순번</td>
          <td>참여 회사명</td>
          <td>회원명</td>
          <td>설문 참여 여부</td>
          <td>참여 일시</td>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A회사</td>
            <td>김*당</td>
            <td>참여</td>
            <td>
              <Date />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>B회사</td>
            <td>김*당</td>
            <td>참여</td>
            <td>
              <Date />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>C회사</td>
            <td>김*당</td>
            <td>미참여</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default SurveyMemberList;
