package com.ktdsuniversity.edu.questions.service;

import com.ktdsuniversity.edu.questions.vo.QuestionsVO;
import com.ktdsuniversity.edu.questions.vo.QuestionsWriteVO;

public interface QuestionsService {

	QuestionsVO createNewQuestion(QuestionsWriteVO writeVO);

}
