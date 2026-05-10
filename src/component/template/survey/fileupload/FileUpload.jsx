import "../css/inquiry.css";

function FileUpload() {
  return (
    <div className="file-area">
      <label className="form-label">파일 첨부</label>
      <label className="drop-zone">
        <span className="drop-txt">
          파일을 드래그하거나 클릭하여 업로드하세요.
        </span>
        <input type="file" style={{ display: "none" }} multiple />
      </label>
      {/* file list 추가 예정 */}
    </div>
  );
}

export default FileUpload;
