import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  console.log("parent is rendring");

   let ref = useRef(null);
   let [count,setCounter] = useState(0);
  


   useEffect(() =>{
   
  ref =  setInterval(() => {
   setCounter(count+1);
   },1000)
   console.log("useEffect");

   return () => {
     console.log(" Effect");
   }
  },[])

  return (
    <div className="App">
     <p>{count}</p>
     <button onClick={() => {
     clearInterval(ref);
    
     
     }}>Stop the watch </button>
    </div>
  );
}

export default App;
