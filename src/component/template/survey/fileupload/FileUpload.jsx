import "../css/inquiry.css";

function FileUpload({ files = [], setFiles, mode = "box" }) {
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (mode === "button") {
    return (
      <div className="btn-file-area">
        {/* 첨부된 파일 리스트 가로 출력 */}
        <ul className="attach-list">
          {files.map((file, index) => (
            <li key={index} className="attach-item">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="btn-del"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        <label className="btn-attach">
          + 파일 첨부
          <input
            type="file"
            style={{ display: "none" }}
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
    );
  }

  return (
    <div className="file-area">
      <label className="form-label">파일 첨부</label>

      <label className="drop-zone">
        <span className="drop-txt">
          파일을 드래그하거나 클릭하여 업로드하세요.
        </span>
        <input
          type="file"
          style={{ display: "none" }}
          multiple
          onChange={handleFileChange}
        />
      </label>

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
    </div>
  );
}

export default FileUpload;
