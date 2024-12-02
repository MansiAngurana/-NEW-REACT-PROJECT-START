import logo from './logo.svg';
import './App.css';
import Studata from './Studata.js';
function App() {
  return (
    <div className="App">
        <h1> <center>STUDENT-DATA</center></h1>
      <div className='cont'>
       
      
        {/* <ul>
            <li>Name</li>
            <li>Class</li>
            <li>Section</li>
            <li>Result</li>
            </ul> */}
         
          <Studata Name="Mansi" Class="2nd"  Section="A" Result="Pass"/>
          <Studata Name="Rahul" Class="2nd"  Section="A" Result="failed"/>
          <Studata Name="Unisha" Class="2nd"  Section="A" Result="Pass"/>
          <Studata Name="Diksha" Class="2nd"  Section="A" Result="Pass"/>
         
      </div>
    </div>
  );
}

export default App;
