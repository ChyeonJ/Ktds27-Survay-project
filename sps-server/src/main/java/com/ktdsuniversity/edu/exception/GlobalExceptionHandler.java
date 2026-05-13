package com.ktdsuniversity.edu.exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = ApiException.class)
    public Map<String, Object> handleApiException(ApiException ae) {
        int status = ae.getErrorStatus();
        Object errorMessage = ae.getError();

        Map<String, Object> errors = new HashMap<>();
        errors.put("status", status);
        errors.put("errorMessage", errorMessage);

        return errors;
    }
}
