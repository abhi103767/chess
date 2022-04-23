import logo from './logo.svg';
import './App.css';

import Button from './component/Button';
import Flex from './component/Flex';
import { useState } from 'react';
function App() {
  const [theme,settheme] = useState('light');
  console.log(theme)
  return (
    <div className="App">
      <Button onClick={() => {
        console.log('Hii');
        settheme(theme === 'light' ? 'dark' : 'light');
      }} theme = {theme}>
        Hii
      </Button>
      <h1>{theme}</h1>
      <Flex>
       <div> 1 </div>
        <div>   2 </div>
      <div>  3 </div>
      </Flex>
     
    </div>
  );
}

export default App;
