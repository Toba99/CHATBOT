import './style';
  import { Component } from 'preact';
	import Pusher from 'pusher-js';
  import {set as setLocal, get as getLocal, remove } from 'local-storage';
  import { Router, route } from 'preact-router';
  import Homepage from './homepage'
  import Botpage from './botpage'
  import Loginpage from './loginpage';
    
  export default class App extends Component {
    state = {
      loggedInUser: getLocal("liu")
    }

    setUser = user => {
      setLocal("liu", user);
      this.setState(
        {loggedInUser: user},
        () => {
          route("/julia")
        });
    }

    logoutUser = () => {
      remove("liu");
      this.setState({loggedInUser: null}, () => {
        route("/login")
      });
    }

    render() {
      const { loggedInUser } = this.state;

      return (
       <div id="app">
    
        <Router >
         <Homepage path="/" />
         <Botpage path="/julia" loggedInUser={loggedInUser} logoutUser={this.logoutUser}/>
         <Loginpage path="/login" loggedInUser={loggedInUser} setUser={this.setUser} />
        </Router>
       </div>
      );
     }
  }
  