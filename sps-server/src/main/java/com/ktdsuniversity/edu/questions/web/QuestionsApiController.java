package com.ktdsuniversity.edu.questions.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ktdsuniversity.edu.exceptions.SpsServerException;
import com.ktdsuniversity.edu.questions.service.QuestionsService;
import com.ktdsuniversity.edu.questions.vo.QuestionsVO;
import com.ktdsuniversity.edu.questions.vo.QuestionsWriteVO;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/api/question")
public class QuestionsApiController {
	
	@Autowired
	private QuestionsService questionsService;
	
	@ResponseBody
	@PostMapping("/write")
	public QuestionsVO doWriteAction(@Valid @ModelAttribute QuestionsWriteVO writeVO, 
			BindingResult bindingResult) {
	if(bindingResult.hasErrors()) {
		List<FieldError> errors = bindingResult.getFieldErrors();
		throw new SpsServerException("입력한 데이터가 부족합니다.", HttpStatus.BAD_REQUEST.value(), errors);
	}
	
	//UserVO loginUser = util추가할거임?.getPrincipal();
	//wrtieVO.setEmail(loginuser.getEmail());
	
	QuestionsVO createQuestions = this.questionsService.createNewQuestion(writeVO);
	
	return createQuestions;
	}
}
