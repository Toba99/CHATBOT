import "./style";
import { Component } from "preact";
import Pusher from "pusher-js";
import logo from "../components/Julia.svg";
import sendbtn from "../components/send.svg";
import formatDate from "date-fns/lightFormat";
import { route } from "preact-router";

const todaysDate = formatDate(new Date(), "dd-MM-yyyy");

export default class Botpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: "",
      conversation: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (!this.props.loggedInUser) {
      route("/login", true);  
    }
  }

  componentDidMount() {
    const pusher = new Pusher("5bfb9d1d0dd2482b362e", {
      cluster: "us3",
      encrypted: true,
    });

    pusher.subscribe("bot").bind("bot-response", this.updateConvo);

    fetch(`http://localhost:7777/chats/${this.props.loggedInUser}`)
      .then(resp => {
        if (!resp.ok) throw new Error("Error fetching conversations");

        resp.json().then(this.initialiseConvo);
      });
  }

  updateConvo = (message) => {
    const {conversation} = this.state;
    const todaysChat = conversation[todaysDate];

    this.setState({
      conversation: {
        ...conversation,
        [todaysDate]: [...todaysChat, message]
      }
    });
  }

  initialiseConvo = conversation => {
    this.setState({ conversation });
  }

  handleChange(event) {
    this.setState({ userMessage: event.target.value });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.state.userMessage) return;

    fetch("http://localhost:7777/chats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: this.state.userMessage,
        loggedInUser: this.props.loggedInUser
      }),
    });
    this.setState({ userMessage: "" });
  }

  render() {
    const {conversation} = this.state;
    const chatHistory = Object.keys(conversation).map(day => 
        <>
          <p className="day">{day}</p>
          {conversation[day].map(convo => ChatBubble(convo.message, convo.timestamp, convo.sender))}
        </>
      );

    return (
      <div class="body__box">
        <div class="header">
          <div class="header__logo-box">
            <img class="header__logo" alt="Julia's Image" src={logo} />
          </div>
          <div class="header__text-box">
            <div class="header__text-primary">
              <p>Julia</p>
            </div>

            <div class="header__text-secondary">
              <p>online</p>
            </div>
          </div>
          <span class="loggedInUser">{this.props.loggedInUser}</span>
          <button class="logoutbutton" onClick={() => this.props.logoutUser()}>Logout</button>
        </div>
        <div class="conversation__box">
          <div class="conversation-view">{chatHistory}</div>
          <div class="input__box">
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.userMessage}
                  onInput={this.handleChange}
                  class="text__input"
                  type="text"
                  autofocus
                  placeholder="Type your message"
                />
              </form>
            </div>
            <div>
              <div class="send__btn-box">
                <img
                  onClick={this.handleSubmit}
                  class="send__btn"
                  alt="send button"
                  src={sendbtn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function ChatBubble(message, timestamp, sender) {
  return (
    <div class={`${sender} chat-bubble`}>
      <span class="chat-content">{message}<span class={`time ${sender}`}>{formatDate(new Date(timestamp), 'hh:mma')}</span></span>
    </div>
  );
};
