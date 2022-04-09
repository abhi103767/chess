import logo from './logo.svg';
import './App.css';
import ComponentC from './component/ComponentC';
import React  from 'react';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {

  return (
    <div className="App">
     
       <UserContext.Provider value='Abhishek'>
         <ChannelContext.Provider value = "Avinash">
  
     <ComponentC />
     </ChannelContext.Provider>
    
     </UserContext.Provider>
    
   
    </div>
  );
}

export default App;
