// import logo from './logo.svg';
import './App.css';
import  React,{useState}from'react'
function App() {
  const[val1,setValue1]=useState()
  const[val2,setValue2]=useState()
  const[ans,setAns]=useState("...")
  function sum(){
    
    // setAns(val1+val2)
    setAns(Number(val1) + Number(val2));
  }
  function reset() {
    setValue1(0);
    setValue2(0);
    setAns(0);
  }

  return (
    <div className="App">
    
      <div className='container' >
      <h1><center>Counting</center></h1> 
    
  <div className='box1'>
<lable>Enter A</lable>
<input type='text'placeholder='Enter a number' value={val1} onChange={(e)=> setValue1(e.target.value)} ></input>

  </div>
  <div >
<lable>Enter B</lable>
<input type='text'placeholder='Enter a number' value={val2} onChange={(e)=>setValue2(e.target.value)} ></input>
  </div>
  <div >
  <button onClick={sum}>submit</button>
  <button onClick={reset}>reset</button></div>
    <div>
        <h2>Result: {ans}</h2> 
      </div>
      </div>
    </div>
  );
}

export default App;
