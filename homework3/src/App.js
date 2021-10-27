import { useState } from 'react';
import './App.css';
import Button from './Components/Button'
import Counter from './Components/Counter'
import Stars from './Components/Stars';

function App() {
  const [count, setCount] = useState(0)
  function addCount(){
    setCount(count + 1);
  }
  function minusCount(){
    if(count > 0){
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <Button onClick={() => addCount} buttonType = {'+'}/>
      <Counter count={count}/>
      <Button onClick={() => minusCount} buttonType = {'-'}/>
      <Stars count={count}/>
    </div>
  );
}

export default App;
