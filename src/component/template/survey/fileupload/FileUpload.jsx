function FileUpload() {
  return (
    <div>
      <h4>파일 첨부</h4>
      <label>
        <div>
          <div>
            <span>파일 아아콘이든 이미지든</span>
          </div>
          <span>파일을 등록하세요</span>
        </div>
        <input type="file" multiple />
      </label>
      {/* file list 추가 예정 */}
    </div>
  );
}

export default FileUpload;
