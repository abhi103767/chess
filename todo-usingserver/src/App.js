import logo from './logo.svg';
import './App.css';
import FetchingData from './component/FetchingData';
import PostData from './component/PostData';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  console.log("Parent is reindering")
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);

    useEffect(() => {
      console.log(submit);
      
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
         setData(res)
         
        })
        console.log('Use Effect')



    },[submit])
 
    // console.log(data);
    // console.log(submit);


 const checksubmit  = () => {
   setSubmit((perv) => !perv);
 }


  return (
    <div className="App">
   
      <PostData      checksubmit={checksubmit}/>
      {

      data.map((item) => {
        // console.log(item);
       return <FetchingData id = { item.id }firstName={item.firstName} secondName={item.secondName} 
       checksubmit={checksubmit}/>
      })
    }

    </div>
  );
}

export default App;
