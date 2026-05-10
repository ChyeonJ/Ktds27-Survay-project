import { useState } from "react";
import UserInfo from "./userinfo/UserInfo";
import FileUpload from "./fileupload/FileUpload";

function SurveyCreate() {
  const [userInfo] = useState({
    name: "김*당",
    company: "가나다라마바사아자 (주)",
    email: "kkkkk@nnnnn.com",
  });
  // TODO: formData 가데이터 넣고 시험할 때용
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    content: "",
  });

  //TODO: 가데이터용
  const [files, setFiles] = useState([]);

  return (
    <div>
      <div>
        <h2>문의등록</h2>
        <form>
          <UserInfo userInfo={userInfo} />
          <h3>문의 내용 입력</h3>
          <div>
            <label></label>
            <select name="category" value={null} onChange={null}>
              <option value="">문의 유형 선택</option>
              <option value="1">분야1</option>
              <option value="2">분야2</option>
              <option value="3">분야3</option>
            </select>
          </div>
          <div>
            <label>제목</label>
            <input
              type="text"
              name="title"
              value={null}
              onChange={null}
              placeholder="문의 제목을 입력해주세요"
            />
          </div>
          <div>
            <label>내용</label>
            <textarea
              name="content"
              value={null}
              onChange={null}
              placeholder="문의 내용을 입력해주세요"
            />
          </div>
          <FileUpload />
          <div>
            <button type="button" onClick={() => alert("취소되었습니다.")}>
              취소
            </button>
            <button
              type="submit"
              onClick={() => alert("문의가 등록되었습니다.")}
            >
              문의 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SurveyCreate;
