package com.websocket.websocket.controller;

import com.websocket.websocket.model.Message;
import com.websocket.websocket.service.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin("http://localhost:3000/")
public class MessageController {
    private MessageService messageService;


    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message) {
        Message savedMessage = messageService.saveMessage(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedMessage);
    }

    @GetMapping
    public ResponseEntity<List<Message>> getMessagesBetweenUsers(@RequestParam Long senderId, @RequestParam Long recipientId) {
        List<Message> messages = messageService.getMessagesBetweenUsers(senderId, recipientId);
        return ResponseEntity.ok(messages);
    }


}
