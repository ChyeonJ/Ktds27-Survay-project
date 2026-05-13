import { createSlice } from "@reduxjs/toolkit";
import { fetchAddQuestion } from "../../https/question/questionFetch";

export const questionSlice = createSlice({
  name: "question-slice",
  initialState: {
    questionList: [],
  },
  reducers: {
    setQuestionList(state, action) {
      state.questionList = action.payload;
    },
  },
});

export const questionAction = questionSlice.actions;

export const questionThunk = {
  write(subject, content, envName, files) {
    return async (dispatcher) => {
      const questionAddData = await fetchAddQuestion(
        // TODO: jwt 기능 생길 시 사용
        // sessionStorage.getItem("jwt")
        subject,
        content,
        envName,
        files,
      );
      if (questionAddData.error) {
        //TODO: 에러 처리
        dispatcher(null);
      }
      // else {
      //   dispatcher(null);
      // }
    };
  },
};
