import './style';
import { Component } from 'preact';
import Pusher from 'pusher-js';
import logo from '../components/Julia.svg';
import sendbtn from '../components/send.svg';

export default class Botpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [{   user: 'ai',text:"Hey, I am Julia, a Medical Assistant",},{   user: 'ai',text:"Enter your symptoms, e.g (Cough, Headache, e.t.c)",},{   user: 'ai',text:"Here are some common symptoms to assist you: COUGH, RUNNY OR BLOCKED NOSE, FEVER, CHILLS, HEADACHE, SORE THROAT, MUSCLE OR BODY PAIN, NAUSEA, LOSS OF TASTE OR SMELL, TIREDNESS,DIFFICULTY SLEEPING, EARACHE, CONSTIPATION, STOMACH ACHE, TOOTHACHE, BAD BREADTH,  or any other symptoms you may be experiencing",}],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const pusher = new Pusher('5bfb9d1d0dd2482b362e', {
      cluster: 'us3',
      encrypted: true,
    });

    const channel = pusher.subscribe('bot');
    channel.bind('bot-response', data => {
      const msg = {
        text: data.message,
        user: 'ai',
      };
      console.log("res",data);
      
      this.setState({
        conversation: [...this.state.conversation, msg],
      });
    });
  }

  handleChange(event) {
    this.setState({ userMessage: event.target.value });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    console.log("hjhshjds")
    const msg = {
      text: this.state.userMessage,
      user: 'user',
    };

    this.setState({
      conversation: [...this.state.conversation, msg],
    });

    fetch('http://localhost:7777/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: this.state.userMessage,
      }),
    });

    this.setState({ userMessage: '' });
  }

  render() {
    const ChatBubble = (text, i, className) => {
      const classes = `${className} chat-bubble`;
      return (
        <div key={`${className}-${i}`} class={`${className} chat-bubble`}>
          <span class="chat-content">{text}</span>
        </div>
      );
    };

    const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div class="body__box">
        
        <div class="header">
          <div class="header__logo-box">
            <img class="header__logo" alt="Julia's Image" src={logo} />
          </div>
          <div class="header__text-box">
            <div class="header__text-primary"><p>Julia</p></div>
 
           
            <div class="header__text-secondary"><p>online</p></div>
          </div>
        </div>
        <div class="conversation__box">
          <div class="conversation-view">{chat}</div>
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
                <img onClick={this.handleSubmit} class="send__btn" alt="send button" src={sendbtn}/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
