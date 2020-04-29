import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Speech from 'react-speech';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <article className="card">
      Input Box 1
      <input type="text" name="name" height="100"/>
      <br></br>
      Input Box 2
      <input type="text" name="name" />
      <br></br>
      <Speech text="Hello World" />
      </article>

      
      </header>
    </div>
  );
}

export default App;
