import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './component/Title';
import Count from './component/Count';
import Button from './component/Button';

console.log("parnet is rendeing");
function App() {
  console.log(1)

  
  // let [salary,setSalary] = useState(5000);
  // let [age,setAge] = useState(5);

  // function incrementAge(){
  //   setAge(age+1);
  // }

  // function incrementSalary(){
  //   setSalary(salary+1500);
  // }
  return (
    <div className="App">
      {/* <Title />
      <Count count={age} text = 'Age' />
      <Button handleClick={incrementAge} />
      <Count count={salary} text = 'salary' />
      <Button handleClick={incrementSalary} /> */}
     
    </div>
  );
}

export default App;
