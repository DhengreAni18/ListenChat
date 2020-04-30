import React from "react";
import Speech from "react-speech";

export class Parent extends React.Component {
  constructor(props) {
    super();
    this.greet = this.greet.bind(this);
    this.state = {
      text: [],
    };
  }

  greet(value) {
    console.log(value);

    const { text } = this.state;
    return this.setState({
      text: text.concat(value),
    });
  }

  render() {
    return (
      <div>
        <Child onGreet={this.greet} />
        <ul>
          {this.state.text.map((x) => (
            <li>
              {x} <Speech text={x} textAsButton displayText="Play" />{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export class Child extends React.Component {
  constructor(props) {
    super();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  eventClick() {
    this.props.onGreet(this.state.value);
  }

  render() {
    return (
      <div>
        <div class="form__group field">
          <input
            type="text"
            class="form__field"
            placeholder="Name"
            id="name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label for="name" class="form__label">
            Chat..
          </label>
        </div>

        <button type="button" onClick={this.eventClick}>
          Submit{" "}
        </button>
      </div>
    );
  }
}

export default Parent;
