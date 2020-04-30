import React from "react";
import "./App.css";
import Parent from "./modules/ulist";

class App extends React.Component {
  render() {
    return (
      <header className="App-header">
        <article className="card">
          <div>
            <div class="grid2x2">
              <div class="box box1">
                BOT
                <Parent /> 
              </div>
              <div class="box box2">
                CUSTOMER
                <Parent /> 
              </div>
            </div>
          </div>
        </article>
      </header>
    );
  }
}

export default App;
