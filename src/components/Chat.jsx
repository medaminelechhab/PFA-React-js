import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import profile from '../icons/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
import send from '../icons/send-message.png'

const Chat = ({ currentUser }) => {
    const [users, setUsers] = useState([]);
    const [recipientId, setRecipientId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    const handleSendMessage = async () => {
        try {
            const message = {
                sender: {
                    id: currentUser.id
                },
                recipient: {
                    id: recipientId
                },
                content: newMessage,
                timestamp: new Date().toISOString()
            };
            await axios.post('http://localhost:8080/api/messages/send', message);
            setNewMessage('');
            loadMessages(currentUser.id, recipientId);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };
    

    const handleSelectRecipient = (recipientId) => {
        setRecipientId(recipientId);
        loadMessages(currentUser.id, recipientId);
    };

    const loadMessages = async (senderId, recipientId) => {
        try {
            const e = await axios.get(`http://localhost:8080/api/messages?senderId=${senderId}&recipientId=${recipientId}`);
            const r = await axios.get(`http://localhost:8080/api/messages?senderId=${recipientId}&recipientId=${senderId}`); 
            const en = e.data;
            const re = r.data;
            const response = [...en, ...re];
            const sortedMessages = response.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            setMessages(sortedMessages);
          } catch (error) {
            console.error('Erreur lors de la récupération des messages', error);
          }
          
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-2xl font-bold mb-4 ">Discussions</h2>
                <div className='border-b border-gray-300 mb-4'></div>
                <ul>
                    {users.map(user => (
                        <div className='flex cursor-pointer py-2 border border-white mb-2 h-14 rounded-md p-4 bg-white'>
                            <img className='size-11 rounded-full flex items-center' src={profile} alt=''/>
                            <li key={user.id} onClick={() => handleSelectRecipient(user.id)} className="text-mb text-base font-medium capitalize flex items-center">{user.username}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="w-3/4 p-4">
                <div className="border-b pb-4 mb-2">
                    <h2 className="text-lg font-bold">Chat with {recipientId}</h2>
                </div>
                <div className="h-5/6 overflow-y-auto">
                    {messages.map(message => (
                        <div key={message.id} className="py-2 mb-1">
                            <span className={`border rounded-full p-2 ml-3 ${message.sender.username === currentUser.username ? 'bg-blue-500 border-blue-500 text-white ml-[850px]' : 'bg-green-500 border-green-500 text-white'}`}>{message.content}</span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="mt-4 flex ">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Aa"
                        className="w-full p-2 border border-gray-300 rounded-full outline-none"
                    />
                    <img className='size-6 ml-2 mt-2 cursor-pointer' src={send} alt='' onClick={handleSendMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;
