import logo from './logo.svg';
import './App.css';
import {useState} from 'react';//use useState when there is something we want to keep track of and update


function App() {
  //initialize/destructure useState
  const [count, setCount] = useState(0)
  const [evenCount, setEvenCount] = useState(0)
  const[color,setColor] = useState('even')
  //count is the variable for hook's current/initial state, which is set to 0 in useState()
  //setCount is the updated state of count
  const addOne = ()=>{
    setCount(count+1)
    if((count+1) %2 === 0){
      setEvenCount(evenCount+1)
      setColor('even')
    }else{
      setColor('odd')
    }
  }
  const minusOne = () =>{
    setCount(count+1)
    if((count+1) %2 === 0){
      setEvenCount(evenCount+1)
      setColor('odd')
    }else{
      setColor('even')
    }
  }
  return (
    <div className="App">
      <h1>Counter</h1>
      {/* <h3>Single Count: {count%2 === 0 ? <p id = 'even'>{count}</p>: <p id = 'odd'>{count}</p>} </h3> */}
      <h3>Single Count: <p id = {color}>{count}</p></h3>
      <h3>{count}</h3>
      <button onClick = {addOne}>Add 1</button>
      <button onClick = {minusOne}>Minus 1</button>
      <h3>Even Count: {evenCount}</h3>
    </div>
  );
}
//destructure:
//instead of props, use {var1, var2, var3}
export default App;
