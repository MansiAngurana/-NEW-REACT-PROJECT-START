// import logo from './logo.svg';
// import './App.css';
// import React, {useState} from 'react' ;

// function App() {
//   const sales=[

//     {
//       id:1101,name:"jhon",amount:1100
//     },
//     {
//       id:1102,name:"jhon",amount:1100
//     },
//     {
//       id:1103,name:"jhon",amount:1100
//     },
//     {
//       id:1104,name:"jhon",amount:500
//     },
//     {
//       id:1105,name:"jhon",amount:1100
//     },
//     {
//       id:1106,name:"jhon",amount:700
//     },
//     {
//       id:1107,name:"jhon",amount:1100
//     },
//     { 
//       id:1108,name:"jhon",amount:1100
//     },
//     {
//       id:1109,name:"jhon",amount:1100
//     },
//     {
//       id:1110,name:"jhon",amount:1100
//     }
    
//   ];
//   const [maxSales,setMaxSales] = useState(null);
//   const [sumSales,setSumSales] = useState(null);

//   const MaxSales = () =>{
//     const maxSales =sales.reduce((max,item) => (item.amount > max ? item.amount :max),0);
//     setMaxSales(maxSales);
//   };

//   const SumSales =() =>{
//     const totalsales =sales.reduce((sum,item) => sum + item.amount,0);
//     setSumSales(totalsales);
//   };
//   return (
//     <div className="App">
//    <table>
//     <thead>
//       <th>Id:</th>
//       <th>Name:</th>
//       <th>Amount:</th>
//     </thead>
//     <tbody>
//       {sales.map((item)=>
//       (<tr>
//         <td> {item.id}</td>
//         <td> {item.name}</td>
//         <td> {item.amount}</td>
//         </tr>
//       )
//       )}
//        <div>
//         <button onclick={MaxSales}>Max Sales</button>
//         <button onclick={SumSales}>Sum Sales</button>
//        </div>
//        <div>
//         {maxSales !== null &&
//         <p>MAX SALES AMOUUNT:{maxSales}</p> }
//         {sumSales !== null &&
//           <p>TOTAL SALES AMOUUNT:{sumSales}</p>}

//        </div>
      
//     </tbody>
//    </table>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React, { useState } from 'react';

function App() {
  const sales = [
    { id: 1101, name: 'Aarav', amt: 0 },
    { id: 1102, name: 'Vivaan', amt: 1500 },
    { id: 1103, name: 'Diya', amt: 2000 },
    { id: 1104, name: 'Ananya', amt: 1800 },
    { id: 1105, name: 'Kabir', amt: 1700 },
    { id: 1106, name: 'Ishaan', amt: 1600 },
    { id: 1107, name: 'Aditi', amt: 1900 },
    { id: 1108, name: 'Meera', amt: 1400 },
    { id: 1109, name: 'Aryan', amt: 1300 },
    { id: 1110, name: 'Saanvi', amt: 1200 },
    { id: 1111, name: 'Rohan', amt: 1100 },
    { id: 1112, name: 'Tara', amt: 1000 },
    { id: 1113, name: 'Anika', amt: 900 },
    { id: 1114, name: 'Krishna', amt: 800 },
    { id: 1115, name: 'Dev', amt: 700 },
    { id: 1116, name: 'Avni', amt: 600 },
    { id: 1117, name: 'Nisha', amt: 500 },
    { id: 1118, name: 'Rhea', amt: 400 },
    { id: 1119, name: 'Ayan', amt: 300 },
    { id: 1120, name: 'Ira', amt: 200 },
  ];

   
  const [maxSales, setMaxSales] = useState(null);
  const [sumSales, setSumSales] = useState(null);

  
  const MaxSales = () => {
    const maxSale = sales.reduce((max, item) => (item.amt > max ? item.amt : max), 0);
    setMaxSales(maxSale);
  };

 
  const SumSales = () => {
    const totalSales = sales.reduce((sum, item) => sum + item.amt, 0);
    setSumSales(totalSales);
  };
  // const sortByAmount = () => {
  //   const sortedSales = [...sales].sort((a, b) => b.amt - a.amt); // Descending order
  //   setSales(sortedSales);
  // };

  // const sortByName = () => {
  //   const sortedSales = [...sales].sort((a, b) => a.name.localeCompare(b.name));
  //   setSales(sortedSales);
  // };


  return (
    <div className="App">
      <h1><center>Sales Department</center></h1>
      <table border="1" style={{ margin: "auto", textAlign: "center",     }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.amt}</td>
            </tr>
          ))}
          <div>
            <button onClick={MaxSales}>Max sales</button>
             <button onClick={SumSales}> sales</button>
             {/* <button onClick={sortByAmount}>Sort by Amount</button>
        <button onClick={sortByName}>Sort by Name</button> */}
          </div>
           {/* <div>
            {maxSales !== null &&
              <p>Max Sales Amount: {maxSales}</p>}
            {sumSales !== null &&
              <p>Total Sales Amount: {sumSales}</p>}
      </div> */}
      <div className="results">
            {maxSales && <p>Max Sales: {maxSales}</p>}
            {sumSales && <p>Total Sales Amount: {sumSales}</p>}
</div>
        </tbody>
      </table>   
    </div>
  );
}

export default App;
