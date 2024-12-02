// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [showMore, setShowMore] = useState("false");
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  return (
    <div className="App">
      <h1><center>Concept of Show less or show More</center></h1>
      <center> <div className='box1'>

        {/* <p>showMore? text:`${text.substring(0,50)}`</p> */}
        <p> {showMore ? text : `${text.substring(0, 70)}...`}</p>

      </div> </center>
      <div>
        <center>
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show More" : "show less"}</button>

        </center>
      </div>
    </div>
  );
}

export default App;
