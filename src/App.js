import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import Landing from './components/Landing'
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='Register' element={<Register/>} />
        <Route path='Login' element={<Login/>}/>
        <Route path='Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
