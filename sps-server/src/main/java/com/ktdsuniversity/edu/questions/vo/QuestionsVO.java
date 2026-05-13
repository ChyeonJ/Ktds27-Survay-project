package com.ktdsuniversity.edu.questions.vo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotBlank;

public class QuestionsVO {

	private String qnaId;
	private String qnaState;
	private LocalDate qnaCreateDate;
	private LocalDate qnaUpdateDate;
	@NotBlank(message = "제목은 반드시 입력해주세요")
	private String qnaTitle;
	@NotBlank(message = "내용을 반드시 입력해주세요")
	private String qnaContent;
	
	// 아래 3개 @NotBlank 추가 해야함 
	private String qnaName;
	private String qnaCompany;
	private String envName;
	
	private String usrId;

	@NotBlank(message = "환경 정보가 누락되었습니다.")
	private String envId;

	private List<MultipartFile> qnaFiles;
	private String fileGroupId;
	
	public String getQnaName() {
		return this.qnaName;
	}

	public void setQnaName(String qnaName) {
		this.qnaName = qnaName;
	}

	public String getQnaCompany() {
		return this.qnaCompany;
	}

	public void setQnaCompany(String qnaCompany) {
		this.qnaCompany = qnaCompany;
	}

	public String getEnvName() {
		return this.envName;
	}

	public void setEnvName(String envName) {
		this.envName = envName;
	}

	public String getQnaId() {
		return this.qnaId;
	}

	public void setQnaId(String qnaId) {
		this.qnaId = qnaId;
	}

	public String getQnaState() {
		return this.qnaState;
	}

	public void setQnaState(String qnaState) {
		this.qnaState = qnaState;
	}

	public LocalDate getQnaCreateDate() {
		return this.qnaCreateDate;
	}

	public void setQnaCreateDate(LocalDate qnaCreateDate) {
		this.qnaCreateDate = qnaCreateDate;
	}

	public LocalDate getQnaUpdateDate() {
		return this.qnaUpdateDate;
	}

	public void setQnaUpdateDate(LocalDate qnaUpdateDate) {
		this.qnaUpdateDate = qnaUpdateDate;
	}

	public String getQnaTitle() {
		return this.qnaTitle;
	}

	public void setQnaTitle(String qnaTitle) {
		this.qnaTitle = qnaTitle;
	}

	public String getQnaContent() {
		return this.qnaContent;
	}

	public void setQnaContent(String qnaContent) {
		this.qnaContent = qnaContent;
	}

	public String getUsrId() {
		return this.usrId;
	}

	public void setUsrId(String usrId) {
		this.usrId = usrId;
	}

	public String getEnvId() {
		return this.envId;
	}

	public void setEnvId(String envId) {
		this.envId = envId;
	}

	public List<MultipartFile> getQnaFiles() {
		return this.qnaFiles;
	}

	public void setQnaFiles(List<MultipartFile> qnaFiles) {
		this.qnaFiles = qnaFiles;
	}

	public String getFileGroupId() {
		return this.fileGroupId;
	}

	public void setFileGroupId(String fileGroupId) {
		this.fileGroupId = fileGroupId;
	}
	
	

}
