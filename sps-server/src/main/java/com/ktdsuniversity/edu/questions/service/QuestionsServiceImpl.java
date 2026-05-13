package com.ktdsuniversity.edu.questions.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ktdsuniversity.edu.questions.dao.QuestionsDao;
import com.ktdsuniversity.edu.questions.vo.QuestionsVO;
import com.ktdsuniversity.edu.questions.vo.QuestionsWriteVO;



@Service
public class QuestionsServiceImpl implements QuestionsService{
	
	@Autowired
	private QuestionsDao questionsDao;
	
//	private MultipartFileHandler multipartFileHanlder;
//	private FilesDao fileDao;
	
	@Transactional
	@Override
	public QuestionsVO createNewQuestion(QuestionsWriteVO writeVO) {
		
//		String fileGroupId = this.multipartFileHandler.upload(writeVO.getQnaFiles());
//		writeVO.setFileGroupId(fileGroupId);
		
		int successCount = this.questionsDao.insertNewQuestion(writeVO);
		if(successCount == 1) {
			QuestionsVO insertResult = this.questionsDao.selectQuestionById(writeVO.getQnaId());
			return insertResult;
		}
		return null;
	}
	

}
