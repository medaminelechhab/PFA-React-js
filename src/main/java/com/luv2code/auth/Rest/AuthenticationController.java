package com.luv2code.auth.Rest;

import com.luv2code.auth.Entity.AppUser;
import com.luv2code.auth.Service.AuthenticationService;
import com.luv2code.auth.Service.JwtService;
import com.luv2code.auth.Exception.JwtTokenException;
import com.luv2code.auth.Service.UserDetailsServiceImp;
import com.luv2code.auth.repo.AppUserRepostory;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController

public class AuthenticationController {
    private final AppUserRepostory appUserRepostory;
    private final UserDetailsServiceImp userDetailsService;

    private final AuthenticationService authService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public AuthenticationController(AppUserRepostory appUserRepostory, UserDetailsServiceImp userDetailsService, AuthenticationService authService, JwtService jwtService, PasswordEncoder passwordEncoder) {
        this.appUserRepostory = appUserRepostory;
        this.userDetailsService = userDetailsService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AppUser request) {
        return authService.register(request);

    }


    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody AppUser request) {
        Map<String, String> tokens = authService.authenticate(request);
        return ResponseEntity.ok(tokens);
    }

    @GetMapping("/RefreshToken")
    public ResponseEntity<Map<String, String>> refreshTokens(HttpServletRequest request, HttpServletResponse response) throws JwtTokenException {
        Map<String, String> tokens = authService.refresh(request);

        // Retourner la réponse avec les nouveaux tokens
        return ResponseEntity.ok(tokens);
    }





}

