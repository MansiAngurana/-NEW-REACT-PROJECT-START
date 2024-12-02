// import logo from './logo.svg';
import './App.css';
import  React,{useState}from'react'
function App() {
  const [number, setNumber] = useState(0);

  const Positive = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const Negtive = () => {
    setNumber(prevNumber => prevNumber - 1);
  };
  return (
    <div className="App">
      
      <div className='container'>
      <h1><center>COUNT</center></h1>
    <div className='box'>
    <input type='text'placeholder='Numbers' value={number} onChange={(e)=> setNumber(e.target.value)} ></input>
    </div>
    <div className='box1'>
    <button onClick={Positive}>+</button>
    <button onClick={Negtive}>-</button></div></div>
   
    </div>
  );
}

export default App;
