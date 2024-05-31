package com.websocket.websocket.controller;


import com.websocket.websocket.model.LoginRequest;
import com.websocket.websocket.model.Utilisateur;
import com.websocket.websocket.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<Utilisateur> login(@RequestBody LoginRequest loginRequest) {
        Utilisateur utilisateur = authService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        return ResponseEntity.ok(utilisateur);
    }
}
