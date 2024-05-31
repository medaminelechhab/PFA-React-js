package com.websocket.websocket.service;

import com.websocket.websocket.model.Message;
import com.websocket.websocket.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {
    private MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message saveMessage(Message message) {
        message.setTimestamp(LocalDateTime.now());
        return messageRepository.save(message);
    }

    public List<Message> getMessagesBetweenUsers(Long senderId, Long recipientId) {
        return messageRepository.findBySenderIdAndRecipientIdOrRecipientIdAndSenderId(senderId, recipientId, recipientId, senderId);
    }
}
