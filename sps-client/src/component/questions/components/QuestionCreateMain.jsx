import { useRef, useState } from "react";
import UserInfo from "./UserInfo";
import { useDispatch } from "react-redux";
import "../css/inquiry.css";
import { questionThunk } from "../../../toolkit/slices/questionSlice";

function QuestionCreateMain() {
  const titleRef = useRef();
  const contentRef = useRef();
  const envNameRef = useRef();

  const questionDispatcher = useDispatch();

  //token 없으니까 일단 token 설정
  const token = "asd";
  if (!token) {
    <></>;
  }
  // 1. 파일들은 '상태(state)'로 관리해야 목록 업데이트가 즉각 반영됩니다.
  const [files, setFiles] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  // 파일 용량 포맷팅 함수 (기존 로직 유지)
  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // 파일 선택 및 드롭 핸들러
  const handleFileChange = (newFiles) => {
    const selectedFiles = Array.from(newFiles);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // 드래그 이벤트 핸들러
  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const cancelSubmit = () => {
    titleRef.current.value = "";
    contentRef.current.value = "";
    envNameRef.current.value = "";
    setFiles([]);
    alert("취소되었습니다.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 titleRef.current.value, contentRef.current.value와
    // 현재 state에 있는 files 배열을 묶어서 FormData로 보내면 끝!

    console.log("제목:", titleRef.current.value);
    console.log("내용:", contentRef.current.value);
    console.log("질문 분야:", envNameRef.current.value);
    console.log("첨부 파일들:", files);

    questionDispatcher(
      questionThunk.write(
        titleRef.current.value,
        contentRef.current.value,
        envNameRef.current.value,
        files,
      ),
    );

    titleRef.current.value = "";
    contentRef.current.value = "";
    envNameRef.current.value = "";
    setFiles([]);

    alert("문의가 등록되었습니다.");
  };

  return (
    <div className="inquiry-wrap">
      <div className="inquiry-box">
        <h2 className="main-title">문의등록</h2>
        <form>
          <UserInfo />
          <h3 className="sec-title">문의 내용 입력</h3>
          <div className="form-group">
            <label className="form-label">질문 분야</label>
            <select name="category" ref={envNameRef} className="form-select">
              <option value="">문의 유형 선택</option>
              <option value="1">분야1</option>
              <option value="2">분야2</option>
              <option value="3">분야3</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">제목</label>
            <input
              type="text"
              name="title"
              ref={titleRef}
              placeholder="문의 제목을 입력해주세요"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">내용</label>
            <textarea
              name="content"
              ref={contentRef}
              placeholder="문의 내용을 입력해주세요"
              className="form-textarea"
            />
          </div>
          <label
            className={`drop-zone ${isDragActive ? "active" : ""}`}
            onDragEnter={onDragEnter}
            onDragOver={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <span className="drop-txt">
              파일을 드래그하거나 클릭하여 업로드하세요.
            </span>
            <input
              type="file"
              style={{ display: "none" }}
              multiple
              onChange={(e) => {
                handleFileChange(e.target.files);
              }}
            />
          </label>
          {/* //TODO: 파일 업로드 했을 때 리스트 출력 */}
          {files.length > 0 && (
            <ul className="file-list">
              {files.map((file, index) => (
                <li key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">({formatBytes(file.size)})</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="btn-del"
                  >
                    (취소)
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="btn-area">
            <button
              type="button"
              onClick={cancelSubmit}
              className="btn btn-cancel"
            >
              취소
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-submit"
            >
              문의 등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionCreateMain;
