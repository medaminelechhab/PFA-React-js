package com.websocket.websocket.service;

import com.websocket.websocket.model.Utilisateur;
import com.websocket.websocket.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Utilisateur saveUser(Utilisateur utilisateur) {
        return userRepository.save(utilisateur);
    }

    public Optional<Utilisateur> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<Utilisateur> getAllUsers() {
        return userRepository.findAll();
    }

}
