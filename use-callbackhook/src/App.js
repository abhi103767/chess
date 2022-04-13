import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Title from './component/Title';
import Count from './component/Count';
import Button from './component/Button';

console.log("parnet is rendeing");
function App() {
  // console.log(1)

  
  let [salary,setSalary] = useState(5000);
  let [age,setAge] = useState(5);

  const incrementAge = useCallback(() => {
    setAge(age+1);
  },[age]);
   

  const  incrementSalary = useCallback(() => {
    setSalary(salary+1500);
  },[salary])
  return (
    <div className="App">
      <Title />
      <Count count={age} text = 'Age' />
      <Button handleClick={incrementAge}  text='Age'/>
      <Count count={salary} text = 'salary' />
      <Button handleClick={incrementSalary} text="Salary" />
     
    </div>
  );
}

export default App;
