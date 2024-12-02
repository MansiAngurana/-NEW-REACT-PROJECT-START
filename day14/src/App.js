// import logo from './logo.svg';
import './App.css';

function App() {
  const sales=[

    {
      id:1101,name:"jhon",amount:1100
    },
    {
      id:1102,name:"jhon",amount:1100
    },
    {
      id:1103,name:"jhon",amount:1100
    },
    {
      id:1104,name:"jhon",amount:500
    },
    {
      id:1105,name:"jhon",amount:1100
    },
    {
      id:1106,name:"jhon",amount:700
    },
    {
      id:1107,name:"jhon",amount:1100
    },
    { 
      id:1108,name:"jhon",amount:1100
    },
    {
      id:1109,name:"jhon",amount:1100
    },
    {
      id:1110,name:"jhon",amount:1100
    }
    
  ];
  // const salesSum = sales.reduce((sum, record) => sum + record.amount, 0);
  // const salesSum = sales.sort((a, b) => a.amount + b.amount);
  // console.log(salesSum)

  
  const range=sales.filter(item=>(item.amount>=500 && item.amount<=700));
  console.log(range)




  return (
    <div className="App">
    <h1><center>JSON(Sales)</center></h1>
    <div>
    
      {/* const sales-sum=sales.reduce((sum,record)=>) */}
      {/* <p>const sales-sum=sum.reduce((sum,record)=>
      sum+record.amount,0)</p> */}
      {/* <p><center>Total amount is:{sales-range}</center></p> */}
      {/* <p>{rangeText}</p> */}
     {range.map(item => (
  <p>
    Name:  {item.name} (ID:  {item.id}) - Amount:  {item.amount}
  
  </p>

))};
 </div>


    </div>
  );
}

export default App;
