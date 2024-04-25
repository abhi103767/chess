import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // Add this
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './component/Board'
import InputFrom from './component/InputForm/index';
import io from 'socket.io-client'; // Add this
import Home from './pages/home';
import Chat from './pages/chat'
import Loader from './component/loader/loader';

const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here

function App() {
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState(''); // Add this
  console.log({username,room})

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/loading' element={<Loader socket={socket} username={username} />}></Route>
          <Route path = '/chess' element={<Board />}></Route>
          <Route path='/inputFrom' element={<InputFrom socket={socket} username={username}  setUsername={setUsername}  />}></Route>
        </Routes>
      </div>
    </Router>
  )
          };

export default App;
