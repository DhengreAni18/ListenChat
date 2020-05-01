import React from "react";
import Speech from "react-speech";

export class Parent extends React.Component {
  constructor(props) {
    super();
    this.greet = this.greet.bind(this);
    this.greetcust = this.greetcust.bind(this);
    this.state = {
      text: [],
      txtcust: [],
    };
  }

  greet(value) {
    console.log(this.state.text);

    // const { text } = this.state;
    return this.setState({
      text: this.state.text.concat(value),
    });
  }

  greetcust(value) {
    console.log(this.state.txtcust);

    // const { text } = this.state;
    return this.setState({
      txtcust: this.state.txtcust.concat(value),
    });
  }

  render() {
    return (
      <div>
        <article className="card">
          <div className="grid2x2">
            <div className="box box1">
              <Bot onGreet={this.greet} />
              <ul>
                {this.state.text.map((x) => (
                  <li>
                    {x} <Speech text={x} textAsButton displayText="Play" />{" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="box box2">
              <Cust onGreetCust={this.greetcust} />
              <ul>
                {this.state.txtcust.map((x) => (
                  <li>
                    {x} <Speech text={x} textAsButton displayText="Play" />{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export class Bot extends React.Component {
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
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="Name"
            id="ipbot"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <label htmlFor="name" className="form__label">
            Bot
          </label>
        </div>

        <button type="button" onClick={this.eventClick}>
          Submit{" "}
        </button>
      </div>
    );
  }
}

export class Cust extends React.Component {
  constructor(props) {
    super();
    this.state = { valuecust: "" };
    this.handleChangeCust = this.handleChangeCust.bind(this);
    this.eventClickCust = this.eventClickCust.bind(this);
  }

  handleChangeCust(event) {
    this.setState({ valuecust: event.target.value });
  }

  eventClickCust() {
    this.props.onGreetCust(this.state.valuecust);
  }

  render() {
    return (
      <div>
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="Name"
            id="ipcust"
            value={this.state.value}
            onChange={this.handleChangeCust}
          />

          <label htmlFor="name" className="form__label">
            Customer
          </label>
        </div>

        <button type="button" onClick={this.eventClickCust}>
          Submit{" "}
        </button>
      </div>
    );
  }
}

export default Parent;
