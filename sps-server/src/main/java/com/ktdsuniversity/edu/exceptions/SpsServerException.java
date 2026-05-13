package com.ktdsuniversity.edu.exceptions;

public class SpsServerException extends RuntimeException{
	
	private static final long serialVersionUID = 4006389981213570218L;

	private int errorStatus;
	private Object error;
	
	public SpsServerException(String message, int errorStatus, Object error) {
		super(message);
		this.errorStatus = errorStatus;
		this.error = error;
	}

	public int getErrorStatus() {
		return this.errorStatus;
	}

	public void setErrorStatus(int errorStatus) {
		this.errorStatus = errorStatus;
	}

	public Object getError() {
		return this.error;
	}

	public void setError(Object error) {
		this.error = error;
	}

}
