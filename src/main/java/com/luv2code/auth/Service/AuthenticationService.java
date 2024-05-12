package com.luv2code.auth.Service;

import com.luv2code.auth.Entity.AppUser;
import com.luv2code.auth.Exception.JwtTokenException;
import com.luv2code.auth.Exception.UserAlreadyExistsException;
import com.luv2code.auth.Exception.UserNotFoundException;
import com.luv2code.auth.repo.AppUserRepostory;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthenticationService     {

    private final AppUserRepostory appUserRepostory;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
   // private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(AppUserRepostory appUserRepostory, PasswordEncoder passwordEncoder,
                                 JwtService jwtService,
                                 AuthenticationManager authenticationManager) {
        this.appUserRepostory = appUserRepostory;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;

    }



    public ResponseEntity<?> register(AppUser request) {

            if (appUserRepostory.findByUsername(request.getUsername()).isPresent()) {
                // Handle the case where the username is already taken
                throw new UserAlreadyExistsException("L'utilisateur existe déjà avec le nom d'utilisateur : " + request.getUsername());

            }

            AppUser user = new AppUser();
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setRole(request.getRole());

            appUserRepostory.save(user);

        return ResponseEntity.ok("Utilisateur enregistré avec succès !");


    }


    public Map<String, String> authenticate(AppUser request) {
        // Vérifie si un utilisateur avec le nom d'utilisateur fourni existe déjà
        if (!appUserRepostory.findByUsername(request.getUsername()).isPresent()) {
            throw new UserNotFoundException("User Not Found  with the provided username: " );
        }

       Authentication authentication;

          authentication = authenticationManager.authenticate(
                  new UsernamePasswordAuthenticationToken(
                           request.getUsername(),
                           request.getPassword()
                   )
           );


        // L'authentification a réussi, récupère les détails de l'utilisateur
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        // Récupère l'utilisateur à partir de la base de données en utilisant le nom d'utilisateur des détails de l'utilisateur
        AppUser user = appUserRepostory.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Génère les tokens JWT pour l'utilisateur authentifié
        String jwtAccessToken = jwtService.generateToken(user);
        String jwtRefreshToken = jwtService.generateReflechToken(user);

        // Crée une map contenant les tokens JWT et les renvoie
        Map<String, String> tokenMap = new HashMap<>();
        tokenMap.put("access-token", jwtAccessToken);
        tokenMap.put("refresh-token", jwtRefreshToken);
        return tokenMap;
    }

    public Map<String, String> refresh(HttpServletRequest request)  {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String refreshToken = authHeader.substring(7);
            if (jwtService.isValid(refreshToken)) {
                String username = jwtService.extractUsername(refreshToken);
                AppUser user = appUserRepostory.findByUsername(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
                String jwtAccessToken = jwtService.generateToken(user);
                String jwtRefreshToken = jwtService.generateReflechToken(user);
                Map<String, String> token = new HashMap<>();
                token.put("access-token", jwtAccessToken);
                token.put("refresh-token", jwtRefreshToken);
                return token;
            } else {
                throw new JwtTokenException("Token Not valide");
            }
        } else {
            throw new JwtTokenException("Token Null");
        }
    }




}
