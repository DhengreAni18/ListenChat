import React from 'react';
import "./App.css";
import Speech from "react-speech";
import Parent from './modules/ulist';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      botip: null,
      customerip: null,
    };

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  publish() {
    console.log(this.state.botip, this.state.customerip);
  }

  

  render() {
    return (
      <header className="App-header">
        
        <article className="card">
        
          <div>
            <div class="grid2x2">
              <div class="box box1">
              <Parent> </Parent>
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="botip"
                    id="name"
                    value={this.state.botip}
                    onChange={this.handleChange}
                  />
                  <label for="name" class="form__label">
                    BOT
                  </label>
                </div>
                <Speech
                  text={this.state.botip}
                  textAsButton
                  displayText="Play"
                />
              </div>
              <div class="box box2">
              <Parent> </Parent>
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="customerip"
                    id="name"
                    value={this.state.customerip}
                    onChange={this.handleChange}
                  />
                  <label for="name" class="form__label">
                    CUSTOMER
                  </label>
                </div>
                <Speech
                  text={this.state.customerip}
                  textAsButton
                  displayText="Play"
                />
              </div>
            </div>

            {/* <button value="Send" onClick={this.publish}>
              Publish
            </button>  */}
          </div>
        </article>
      </header>
    );
  }
}

export default App;
