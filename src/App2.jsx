import React, { useState } from 'react'
import Login from './chat/Login';
import Chat from './chat/chat';

const App2 = () => {
    const [user, setUser] = useState(null);

    if (!user) {
        return <Login setUser={setUser} />;
    }
    return (
        <Chat currentUser={user} />
    );
};

export default App2