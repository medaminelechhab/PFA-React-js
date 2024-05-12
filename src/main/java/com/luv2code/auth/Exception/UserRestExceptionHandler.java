package com.luv2code.auth.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserRestExceptionHandler {



    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<UserErrorResponse> handleException(UserNotFoundException exc) {

        // create a StudentErrorResponse

        UserErrorResponse error = new UserErrorResponse();

        error.setStatus(HttpStatus.NOT_FOUND.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());



        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<UserErrorResponse> handleUserAlreadyExistsException(UserAlreadyExistsException exc) {
        UserErrorResponse error = new UserErrorResponse();
        error.setStatus(HttpStatus.CONFLICT.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.CONFLICT);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<UserErrorResponse> handleException(Exception exc) {

        // create a StudentErrorResponse
        UserErrorResponse error = new UserErrorResponse();

        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage("Une erreur inattendue s'est produite.");
        error.setTimeStamp(System.currentTimeMillis());

        // return ResponseEntity
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<UserErrorResponse> handleAuthenticationException(AuthenticationException exc) {
        UserErrorResponse error = new UserErrorResponse();
        error.setStatus(HttpStatus.UNAUTHORIZED.value());
        error.setMessage("Authentication failed");
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }
    @ExceptionHandler(JwtTokenException.class)
    public ResponseEntity<UserErrorResponse> handleJwtTokenException(JwtTokenException exc) {
        UserErrorResponse error = new UserErrorResponse();
        error.setStatus(HttpStatus.UNAUTHORIZED.value());
        error.setMessage(exc.getMessage());
        error.setTimeStamp(System.currentTimeMillis());
        return new ResponseEntity<>(error, HttpStatus.UNAUTHORIZED);
    }

}