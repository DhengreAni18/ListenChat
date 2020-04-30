import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Speech from "react-speech";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topicBox: null,
      payloadBox: null,
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
    console.log(this.state.topicBox, this.state.payloadBox);
  }

  render() {
    return (
      <header className="App-header">
        <article className="card">
          <div>
            <div class="grid2x2">
              <div class="box box1">
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="topicBox"
                    id="name"
                    value={this.state.topicBox}
                    onChange={this.handleChange}
                  />
                  <label for="name" class="form__label">
                    BOT
                  </label>
                </div>
              </div>
              <div class="box box2">
                <div class="form__group field">
                  <input
                    type="input"
                    class="form__field"
                    placeholder="Name"
                    name="payloadBox"
                    id="name"
                    value={this.state.payloadBox}
                    onChange={this.handleChange}
                  />
                  <label for="name" class="form__label">
                    CUSTOMER
                  </label>
                </div>
              </div>
            </div>

            {/* <button value="Send" onClick={this.publish}>
              Publish
            </button>  */}
            <Speech text={this.state.topicBox} textAsButton displayText="Play" />
          </div>
        </article>
      </header>
    );
  }
}

export default App;
