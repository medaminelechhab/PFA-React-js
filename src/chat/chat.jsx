import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import profile from '../assets/images/amine2.jpg';
import send from '../assets/images/send-message.png';
import { useParams } from 'react-router-dom';

const Chat = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    const [recipientId, setRecipientId] = useState(id);
    const [recipientUsername, setRecipientUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [Listid, setListid] = useState([]);

    const messagesEndRef = useRef(null);
    const senderId = localStorage.getItem("id");
    console.log(id)
    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:8086/api/messages/${senderId}`);
            setListid(response.data);
        } catch (error) {
            console.error('Error fetching recipient IDs', error);
        }
    };

    useEffect(() => {
        if (Listid.length > 0) {
            getUsersInfo();
        }
    }, [Listid]);

    const getUsersInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:8081/info?userIds=${Listid}`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users info', error);
        }
    };

    const handleSendMessage = async () => {
        try {
            const message = {
                sender: parseInt(senderId, 10),
                recipient: recipientId,
                content: newMessage,
            };

            await axios.post('http://localhost:8086/api/messages/send', message);
            setNewMessage('');
            loadMessages(message.sender, message.recipient);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    const handleSelectRecipient = (recipientId, username) => {
        setRecipientId(recipientId);
        setRecipientUsername(username);
        loadMessages(parseInt(senderId, 10), recipientId);
    };

    const loadMessages = async (senderId, recipientId) => {
        try {
            const response = await axios.get(`http://localhost:8086/api/messages?senderId=${senderId}&recipientId=${recipientId}`);
            const sortedMessages = response.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setMessages(sortedMessages);
        } catch (error) {
            console.error('Error loading messages', error);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex h-screen pt-20 bg-gray-100 rounded-3xl shadow-lg">
            {/* Sidebar */}
            <div className="w-1/4 bg-white p-4">
                <h2 className="text-2xl font-bold mb-4 text-green-700">Discussions</h2>
                <div className="border-b border-gray-300 mb-4"></div>
                <ul>
                    {users.map(user => (
                        <li key={user.id} onClick={() => handleSelectRecipient(user.id, user.username)} className="flex cursor-pointer py-2 mb-2 h-14 rounded-md p-4 hover:bg-gray-200 transition duration-300">
                            <img className="w-10 h-10 rounded-full mr-3" src={profile} alt="" />
                            <div>
                                <span className="text-base font-medium capitalize block">{user.username}</span>
                                <span className="text-xs text-gray-600">{user.firstName} {user.lastName}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Chat Area */}
            <div className="w-3/4 p-4 flex flex-col">
                <div className="border-b pb-4 mb-2">
                    <h2 className="text-lg font-serif text-center">{recipientUsername}</h2>
                </div>
                <div className="flex-1 overflow-y-auto mb-4">
                    {messages.map(message => (
                        <div key={message.id} className={`py-2 mb-1 flex ${message.sender === parseInt(senderId, 10) ? 'justify-end' : 'justify-start'}`}>
                            <span className={`inline-block rounded-full py-2 px-4 ${message.sender === parseInt(senderId, 10) ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                                {message.content}
                            </span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="mt-4 flex items-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full p-2 border border-gray-300 rounded-full outline-none mr-2 focus:outline-none"
                    />
                    <img className="w-8 h-8 cursor-pointer" src={send} alt="" onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Chat;
