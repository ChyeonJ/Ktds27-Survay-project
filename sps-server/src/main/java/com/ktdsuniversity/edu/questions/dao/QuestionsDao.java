package com.ktdsuniversity.edu.questions.dao;

import org.apache.ibatis.annotations.Mapper;

import com.ktdsuniversity.edu.questions.vo.QuestionsVO;
import com.ktdsuniversity.edu.questions.vo.QuestionsWriteVO;


@Mapper
public interface QuestionsDao {

	int insertNewQuestion(QuestionsWriteVO writeVO);

	QuestionsVO selectQuestionById(String qnaId);

}
