import logo from './logo.svg';
import './App.css';
import Rticu from './Rticu.js';
function App() {
  return (
    <div className="App">
      <table  border="1" >
        <tr>
          <th>Sno</th>
          <th>post</th>
          <th>position</th>
        </tr>
     <Rticu sno="a" post="vice-chairmen" position="chair-person"/>
     <Rticu sno="b" post="vice-chairmen" position="chair-person"/>
     <Rticu sno="c" post="vice-chairmen" position="chair-person"/>
     <Rticu sno="d" post="vice-chairmen" position="chair-person"/>
     </table>
    </div>
  );
}

export default App;
