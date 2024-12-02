import logo from './logo.svg';
import './App.css';
import  React,{useState}from'react'
function App() {
const [val, setValue]=useState('0')
function show()
{
  setValue(val *2)
}

  return (
    <div className="App">
      <h1><center>Process & SQR</center></h1>
      <input type="text" placeholder="Enter number"  value={val} onChange={(e)=> setValue(e.target.value)} />
<button onClick={show}>Submit</button>

<p> Ans is  {val}</p>
<p>{val?val:""}</p>

    </div>
  );
}

export default App;
