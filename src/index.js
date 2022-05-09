import './style';
  import { Component } from 'preact';
	import Pusher from 'pusher-js';
  import logo from '../components/Julia.svg';
  import sendbtn from '../components/send.svg';
  import { Router } from 'preact-router';
  import Homepage from './homepage'
  import Botpage from './botpage'
  import Loginpage from './loginpage';
    
  export default class App extends Component {


    render() {
      return (
       <div id="app">
    
        <Router >
         <Homepage path="/" />
         <Botpage path="/julia" />
         <Loginpage path="/login" />
        </Router>
       </div>
      );
     }
  }
  