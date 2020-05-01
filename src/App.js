import React from "react";
import "./App.css";
import Parent from "./modules/interface";

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Parent />
      </header>
    );
  }
}

export default App;
