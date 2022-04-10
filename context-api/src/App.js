import logo from './logo.svg';
import './App.css';
import ComponentC from './component/ComponentC';
import React, { useReducer, useState }  from 'react';
import ComponentF from './component/ComponentF';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CounterContext = React.createContext();
let intialvalue = {
  newCounter : 0
}
function reducer(state,action) {
 // console.log(action);
    switch(action.type){
      case  'increment':
        return {newCounter : state.newCounter + action.value}
      case 'decrement':
        return {newCounter : state.newCounter - action.value}
      case "reset" : 
      return {
        newCounter : 0
      }
    default:
      return state
    }
}

function App() {
  console.log("Parent is rending");


  let [newCounter, dispatch] = useReducer(reducer,intialvalue) 
  //console.log(newCounter.newCounter);

  let [counter,setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  return (
    <div className="App">


<CounterContext.Provider  value= {{counter,increment,newCounter,dispatch}}>
<ComponentC />
</CounterContext.Provider>

   






     
       {/* <UserContext.Provider value='Abhishek'>
         <ChannelContext.Provider value = "Avinash">
  
     <ComponentC />
     </ChannelContext.Provider>
    
     </UserContext.Provider> */}
    
   
    </div>
  );
}

export default App;
