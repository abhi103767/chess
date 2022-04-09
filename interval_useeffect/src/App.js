import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Increament from './components/Increament';

function App() {
;
let [count,setCount] = useState(0);
console.log(count);

let tick = () => {
  console.log('couter is running');
  setCount(count+1)
}

useEffect(() => {

 const Interval =  setInterval(() => {
  // console.log(count)
   console.log("Set Interval is running");
    tick();
  },1000);

  return () => {
    clearInterval(tick);
  }
  
}
,[count])


  return (
    <div className="App">
      <p>{count}</p>
      {/* <Increament /> */}
     
    </div>
  );
}

export default App;
