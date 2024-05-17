import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carac from './components/Carac';
import Login from './components/login';
import Register from './components/Register';
import Caracteristiques from './components/Caracteristiques';
import Qa from './components/Qa';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/footer' element={<Footer/>}/>
          <Route exact path='/qa' element={<Qa/>} />
          <Route exact path='/carac' element={<Carac/>}/>
          <Route exact path='/caracteristiques' element={<Caracteristiques/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
