package com.websocket.websocket.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "sender_id", nullable = false)
    private Utilisateur sender;
    @ManyToOne
    @JoinColumn(name = "recipient_id", nullable = false)
    private Utilisateur recipient;
    private String content;
    private LocalDateTime timestamp;
}
