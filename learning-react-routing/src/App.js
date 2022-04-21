import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route , Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import UserList from './component/UserList';
import UserDetail from './component/UserDetail';





function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/userlist' element={<UserList/>}></Route>
        <Route path='/userlist/:id' element={<UserDetail/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
