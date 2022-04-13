import logo from './logo.svg';
import './App.css';
import FetchingData from './component/FetchingData';
import PostData from './component/PostData';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((res) => setData(res.data));
    },[submit])
    console.log(data);


 const checksubmit  = () => {
   console.log('hii');
   setSubmit(!submit);
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
