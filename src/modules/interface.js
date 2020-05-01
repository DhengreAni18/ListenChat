import React from "react";
import Speech from "react-speech";

export class Parent extends React.Component {
  constructor(props) {
    super();
    this.greet = this.greet.bind(this);
    this.greetcust = this.greetcust.bind(this);
    this.finalChat = this.finalChat.bind(this);
    this.jsonChatBot = this.jsonChatBot.bind(this);
    this.jsonChatUser = this.jsonChatUser.bind(this);
    this.state = {
      text: [],
      txtcust: [],
      finalchat: [],
      chatjson: [],
    };
  }

  greet(value) {
    console.log(this.state.text);

    return this.setState({
      text: this.state.text.concat(value),
    });
  }

  greetcust(value) {
    console.log(this.state.txtcust);

    return this.setState({
      txtcust: this.state.txtcust.concat(value),
    });
  }

  finalChat(value) {
    console.log(this.state.finalchat);

    return this.setState({
      finalchat: this.state.finalchat.concat(value),
    });
  }

  jsonChatBot(value) {
    console.log(this.state.chatjson);

    return this.setState({
      chatjson: this.state.chatjson.concat({
        Bot: value,
        timestamp: new Date(),
      }),
    });
  }

  jsonChatUser(value) {
    console.log(this.state.chatjson);

    return this.setState({
      chatjson: this.state.chatjson.concat({
        User: value,
        timestamp:new Date(),
      }),
    });
  }

  downloadFile = async () => {
    const { chatjson } = this.state;
    const fileName = "Chat_JSON";
    const json = JSON.stringify(chatjson);
    const blob = new Blob([json], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <div>
        <article className="card">
          <div className="grid2x2">
            <div className="box box1">
              <ul>
                {this.state.text.map((xx) => (
                  <li key={xx}>
                    {xx}{" "}
                    <Speech
                      text={xx}
                      textAsButton
                      displayText="Play"
                      voice="Google UK English Male"
                    />{" "}
                  </li>
                ))}
              </ul>
              <Bot
                onGreet={this.greet}
                Onfinal={this.finalChat}
                json={this.jsonChatBot}
              />
            </div>
            <div className="box box2">
              <ul>
                {this.state.txtcust.map((x) => (
                  <li key={x}>
                    {x}{" "}
                    <Speech
                      text={x}
                      textAsButton
                      displayText="Play"
                      voice="Google UK English Male"
                    />{" "}
                  </li>
                ))}
              </ul>
              <Cust
                onGreetCust={this.greetcust}
                Onfinal={this.finalChat}
                json={this.jsonChatUser}
              />
            </div>
          </div>
          
        </article>
        <button className="playall">
            <Speech
              text={this.state.finalchat + ""}
              textAsButton
              displayText="PLAY FINAL CHAT"
              voice="Google UK English Male"
            />
          </button>

          <button onClick={this.downloadFile} className="btn download">
            download json
          </button>
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
    this.props.Onfinal(this.state.value);
    this.props.json(this.state.value);
    this.setState({
      value: "",
    });
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
          <button
            type="button"
            className="btn submit"
            onClick={this.eventClick}
          >
            Send{" "}
          </button>
        </div>
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
    this.props.Onfinal(this.state.valuecust);
    this.props.json(this.state.valuecust);

    this.setState({
      valuecust: "",
    });
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
            value={this.state.valuecust}
            onChange={this.handleChangeCust}
          />

          <label htmlFor="name" className="form__label">
            User
          </label>

          <button
            type="button"
            className="btn submit"
            onClick={this.eventClickCust}
          >
            Send{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Parent;
