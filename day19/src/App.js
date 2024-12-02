// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [password2, setCNpassword] = useState('')
  const [err, seterr] = useState('')
  const [perr, setperr] = useState('')
  const [rpeaterr, setrepeaterr] = useState('')

  function checkEmail(e) {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      seterr('Email is required');
    }
    else if (!value.includes('@') || !value.includes('.')) {
      seterr('Invalid email format');
    }
    else {
      seterr('');
    }
  }

  function checkpassword(e) {
    const value = e.target.value;
    setpassword(value);
    if (!value) {
      setperr('Password is required');
    }
    else if (value.length < 6) {
      setperr('Password must be at least 6 characters long');
    }

    else {
      setperr('')
    }
  }
  function checkCNpassword(e) {
    const value = e.target.value;
    setCNpassword(value);
    if (!value) {
      setrepeaterr('Confirm Password is required');
    }
    else if (value !== password) {
      setrepeaterr('Passwords do not match');
    }
    else {
      setrepeaterr('');
    }
  }

  function submit() {

    if (!email || !password || !password2)
      seterr("fill all the fields")
  }

  return (
    <div className="App">
      <div className='box'>
        <h1><center>LOGIN</center></h1>

        <div>
          <lable>Email  </lable>
          <input type='text' placeholder='Enter your email..' value={email} onChange={checkEmail} />
          {err && <span style={{ color: 'red' }}>{err}</span>}
        </div>

        <div>
          <lable>Password   </lable>
          <input type='text' placeholder='Enter your password..' value={password} onChange={checkpassword} />
          {perr && <span style={{ color: 'red' }}>{perr}</span>}
        </div>

        <div>
          <lable>Re-type  </lable>
          <input type='text' placeholder='Confirm password..' value={password2} onChange={checkCNpassword} />
          {rpeaterr && <span style={{ color: 'red' }}>{rpeaterr}</span>}
        </div>

        <button Click={submit} >SUBMIT</button>

      </div>
    </div>
  );
}

export default App;

