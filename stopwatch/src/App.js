import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';




function App() {


  function abhi(){
     setCounter();
  }
  
  
  abhi();

  console.log("parent is rendring");

   let ref = useRef(null);
   let [count,setCounter] = useState(0);
   let id = null;


  



   useEffect(() =>{
   
   mm = setInterval(() => {
   setCounter(count+1);
   },1)
  
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
