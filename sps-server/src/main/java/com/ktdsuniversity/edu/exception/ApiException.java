package com.ktdsuniversity.edu.exception;

public class ApiException extends RuntimeException {
    private final int errorStatusCode;
    private final Object error;

    public ApiException(int errorStatusCode, Object error) {
        this.errorStatusCode = errorStatusCode;
        this.error = error;
    }

    public ApiException(String message, int errorStatusCode, Object error) {
        super(message);
        this.errorStatusCode = errorStatusCode;
        this.error = error;
    }

    public int getErrorStatus() {
        return this.errorStatusCode;
    }
    public Object getError() {
        return this.error;
    }
}
