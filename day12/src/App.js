import logo from './logo.svg';
import './App.css';

function App() {
  const users=[
    {
      id:1101, name:"user1", email:"aryamansi@gmail.com"
    },
    {
      id:1101, name:"user1", email:"aryamansi@gmail.com"
    },
    {
      id:1101, name:"user1", email:"aryamansi@gmail.com"
    },
    {
      id:1101, name:"user1", email:"aryamansi@gmail.com"
    },
  ]
  return (
    <div className="App">
     <h1><center>All USERS</center></h1>
     {users.map((users)=>(
     <div className='box1'>
     <p>ID : {users.id},</p>
     <p>Name : {users.name},</p>
     <p>Email : {users.email}.</p>
     </div>))}

    </div>
  );
}

export default App;
