/*package com.websocket.websocket.controller;

import com.websocket.websocket.model.Message;
import com.websocket.websocket.service.MessageService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    private MessageService messageService;

    public ChatController(MessageService messageService) {
        this.messageService = messageService;
    }

    @MessageMapping("/chat.send")
    @SendTo("/topic/messages")
    public Message sendMessage(@Payload Message message) {
        return messageService.saveMessage(message);
    }
}*/
