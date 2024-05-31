package com.websocket.websocket.service;

import com.websocket.websocket.model.Utilisateur;
import com.websocket.websocket.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Utilisateur authenticate(String username, String password) {
        Optional<Utilisateur> utilisateur = userRepository.findByUsername(username);
        if(utilisateur.isPresent() && utilisateur.get().getPassword().equals(password)) {
            return utilisateur.get();
        }
        else {
            throw new RuntimeException("Invalid username or password");
        }
    }
}
