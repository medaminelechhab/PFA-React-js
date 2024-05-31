import React, { useState } from 'react'
import Login from './components/Login'
import Chat from './components/Chat';

const App = () => {
  const [user, setUser] = useState(null);

  if(!user) {
    return <Login setUser={setUser}/>;
  }
  return (
    <Chat currentUser={user}/>
  );
};

export default App
