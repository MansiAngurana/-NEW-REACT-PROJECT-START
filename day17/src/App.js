// import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser ,faDog,faBars,faVialCircleCheck,faM,faN,faA,faS,faI } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <h1>FontAwesome in React</h1>
      <div className="container" style={{ border:'2px solid Blue', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',  }}>
       <FontAwesomeIcon icon={faCoffee} size="2x" style={{ color: 'brown' }} />
      <FontAwesomeIcon icon={faUser} size="lg" style={{ marginLeft: '10px' }} />
      {/* <FontAwesomeIcon icon= {fapennib}size="lg" style={{ marginLeft: '10px' }}/> */}
      <FontAwesomeIcon icon={faDog}size="3x" style={{ marginLeft: '20px' }} />
      <FontAwesomeIcon icon={faBars} size='4x' style={{color: "#B197FC" , marginLeft: '10px', }} />
      <FontAwesomeIcon icon={faVialCircleCheck}size='3x' style={{marginLeft: '10px', }} />
      
      </div> 
    <div className='container2'style={{ border:'2px solid brown',height:'200px', display: 'flex', alignItems: 'center', justifyContent:'center', gap: '20px', margin: '20px',background:'beige',fontSize:'35px',fontWeight:'600', }}> <center>
      <FontAwesomeIcon icon={faM} size='3x' style={{marginLeft: '10px', }}/>
      <FontAwesomeIcon icon={faA}size='3x' style={{marginLeft: '10px', }} />
      <FontAwesomeIcon icon={faN}size='3x' style={{marginLeft: '10px', }} />
      <FontAwesomeIcon icon={faS}size='3x' style={{marginLeft: '10px', }} />
      <FontAwesomeIcon icon={faI}size='3x' style={{marginLeft: '10px', }} /></center> 
      </div>
    </div>

    
  );
}

export default App;
