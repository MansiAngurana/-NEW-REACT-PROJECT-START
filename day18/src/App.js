// // import logo from './logo.svg';
// import './App.css';
// import React ,{useState}from 'react';
// function App() {
// const[nm,SetName]=useState('')
// const[age,Setage]=useState('')
// const[err,SetErr]=useState('')

// function checkNm(e){
//   const value=e.traget.value
//   SetName(value)
//   if(value.length<3)
//     SetErr("Atleast 3 letters")
//   else if(!/^[A-Za-z\s]+$/.test(value))
//     SetErr("Aplhabets and space only")
//   else
//   SetErr("")
// }

// function checkAge(e){

//   Setage(e.target.value)



// }
// function Submit(){
// if(!nm)
//   SetErr("Name is required")
// }




//   return (
//     <div className="App"> 
// <h1><center>VALIDTION</center></h1>
// <div>
//   <input type='text' placeholder="Enter your name" value={nm} onChange={checkNm}/>
//   {err && <span style={{color:'red'}}>{err}</span>}
// </div>
// <div>
//   <input type='text' placeholder="Enter your age" value={age} onChange={checkAge}/>
//   {/* {err && <span style={{color:'red'}}>{err}</span>} */}
// </div>
// <button onClick={Submit}>SUBMIT</button>

//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React,{useState}from 'react';
// function App() {
//   const[nm,setname]=useState('')
//   const[age,setage]=useState('')
//   const[err,seterr]=useState('')
//   function checkNm(e)
//   {
//     const value=e.target.value
//     setname(value)
//     if(value.length<3)
//       seterr("Atleast 3 Letters")
//     else if (!/^[A-Za-z/s]+$/.test(value))
//       seterr("Alphabets and space only")
//     else
//     seterr("")
//   }
//   // function checkAge(e)
//   // {
//   //   // const value=e.target.value
//   //   setage(e.target.age)
//   //   setage(age);
//   //   if (!/^d+$/.test(age)) {
//   //     seterr('Age must be a number');
//   //   } else if (age < 18 || age > 20) {
//   //     seterr('Age must be between 18 and 20');
//   //   } else {
//   //     seterr('');
//   //   }
//   function checkAge(e) {
//     const value = e.target.value;
//     setage(value);
//     if (value && (isNaN(value) || value < 18)) {
//       seterr('Age must be 18 or older');
//     } else {
//       seterr('');
//     }
//   }
  
//   }
//   function submit()
//   {
//     if(!nm)
//       seterr("Name is required")
//   }


//   return (
//     <div className="App">
//     <h1><center>Validation</center></h1>
//     <div>
//       <input type="text" placeholder='Enter Name' value={nm} onChange={checkNm}></input>
//       {err && <span style={{color:'red'}}>{err}</span>}
//       </div> 

//       <div>
//       <input type="text" placeholder='Enter age' value={age} onChange={checkAge}></input>
     
//       </div> 
//       <button onClick={submit}>Submit</button>  
//       {err && <span style={{color:'red'}}>{err}</span>}
//     </div>
//   );
// }

// export default App;


import './App.css';
import React,{useState}from 'react'
function App() {
  const[nm,setname]=useState('')
  const[age,setage]=useState('')
  const[err,seterr]=useState('')
  const [Eerr, setperr] = useState('')

  function checkNm(e)
  {
    const value=e.target.value
    setname(value)
    if(value.length<3)
      seterr("Atleast 3 Letters")
    else if (!/^[A-Za-z/s]+$/.test(value))
      seterr("Alphabets and space only")
    else
    seterr("")
  }
  function checkAge(e) {
    const value = e.target.value;
    setage(value);
    if (age && (isNaN(age) || age < 18  )) {
      setperr('Age must be 18 or older' ,);
    } else {
      setperr('');
    }
  }
  function submit()
  {
    if(!nm)
      seterr("Name is required")
  }
  return (
    <div className="App">
    <h1><center>Validation</center></h1>
    <div>
      <input type="text" placeholder='Enter Name' value={nm} onChange={checkNm}></input>
      {err && <span style={{color:'red'}}>{err}</span>}
      </div> 

      <div>
      <input type="text" placeholder='Enter age' value={age} onChange={checkAge}></input>
      {Eerr && <span style={{color:'red'}}>{Eerr}</span>}
     
      </div> 
      <button onClick={submit}>Submit</button>  
    </div>
  );
}

export default App;