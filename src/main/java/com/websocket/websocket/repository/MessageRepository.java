package com.websocket.websocket.repository;

import com.websocket.websocket.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySenderIdAndRecipientIdOrRecipientIdAndSenderId(Long senderId, Long recipientId, Long recipientId2, Long senderId2);
}
