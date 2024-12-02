// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css"; 

function App  ()  {
  return (
    <div className="container">
      <h2>The Finance Committee✅</h2>
      <table className="finance-table">
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Designation</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>The Vice Chancellor</td>
            <td>Chairperson</td>
          </tr>
          <tr>
            <td>b</td>
            <td>The Dean Academic Affairs</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>c</td>
            <td>The Registrar of the University</td>
            <td>Member</td>
          </tr>
          <tr>
            <td>d</td>
            <td>
              Two persons nominated by the Trust out of whom one shall be a
              financial expert
            </td>
            <td>Members</td>
          </tr>
          <tr>
            <td>e</td>
            <td>The Chief Finance and Accounts Officer</td>
            <td>Member-Secretary</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
