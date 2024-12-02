// import logo from './logo.svg';
import './App.css';
import  React,{useState}from'react'
function App() {
    const [email, setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[greet,setGreet]=useState('');
    function checkAuth()
    {
      if(email ==='admin' && password==='admin')
      {
        setGreet("you are welcome");
}
  else{
    setGreet("Wrong");
  
    }}
  return (
    <div className="App">
  <h1><center>LOGIN</center></h1>

  <div><lable>Email</lable>
  <input type='text' placeholder='Username' value={email} onChange={(e)=> setEmail(e.target.value)}></input><br></br>  </div>
  <div>
  <lable>Password</lable>
  <input type='password' placeholder='Enter your password'value={password} onChange={(e)=> setPassword(e.target.value)}></input>

  </div>
  <button onClick={checkAuth}>Submit</button>
  {greet &&(
    <div><h2>{greet}</h2></div>
  )}
    </div>
  );

}
export default App;
