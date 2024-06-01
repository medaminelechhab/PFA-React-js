import React, { useState, useEffect } from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');
    const [connected, setConnected] = useState(false);
    let stompClient = null;

    useEffect(() => {
        if (connected) {
            const socket = new SockJS('/chat-websocket');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, (frame) => {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/public', (message) => {
                    showMessage(JSON.parse(message.body));
                });
                stompClient.send('/app/chat.addUser', {}, JSON.stringify({ sender: username, content: `${username} has joined the chat` }));
            });
        }
    }, [connected]);

    const showMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const sendMessage = () => {
        if (stompClient && newMessage.trim() !== '') {
            const message = { sender: username, content: newMessage };
            stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(message));
            setNewMessage('');
        }
    };

    const handleConnect = () => {
        if (username.trim() !== '') {
            setConnected(true);
        }
    };

    return (
        <div>
            {!connected ? (
                <div>
                    <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button onClick={handleConnect}>Connect</button>
                </div>
            ) : (
                <div>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}><b>{message.sender}:</b> {message.content}</div>
                        ))}
                    </div>
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            )}
        </div>
    );
};

export default ChatRoom;
