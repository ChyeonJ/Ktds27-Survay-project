// 1대1 문의 등록
export const fetchAddQuestion = async (title, content, envName, files) => {
  try {
    const formData = new FormData();
    formData.append("qnaTitle", title); // 문의 제목
    formData.append("qnaContent", content); //문의 내용
    formData.append("envName", envName); //문의 질문 분야

    for (const file of files) {
      formData.append("qnaFiles", file); //파일
    }

    //TODO: jwt 기능 생길 시 사용 삭제 해야함
    const jwt = null;
    const fetchResult = await fetch(
      "http://localhost:8080/api/question/write",
      {
        method: "POST",
        headers: {
          Authorization: jwt,
        },
        body: formData,
      },
    );

    const questionAddResult = await fetchResult.json();
    return questionAddResult;
  } catch (e) {
    return {
      result: false,
      error: "서비스 잠시 중단 되었습니다. 잠시 후 다시 시도해주세요",
    };
  }
};
