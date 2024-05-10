import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
