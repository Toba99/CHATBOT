import './style';
import { Component } from 'preact';
import mainlogo from '../components/julialogo.svg';
import {route} from "preact-router";

export default class Loginpage extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  }

  componentWillMount() {
    if (this.props.loggedInUser) {
      route("/julia", true);  
    }
  }

  handleLogin = () => {
    const {username, password} = this.state;

    if (!username || !password) return;

    fetch("http://localhost:7777/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username, password
      }),
    }).then(res => {
      if (!res.ok) {
        this.setState({error: "Unable to login"});
      } else {
        res.json().then(({loggedInUser}) => {
          this.props.setUser(loggedInUser);
        })
      }
    });
  }

    render() {
      const {username, password, error} = this.state;
        return (
            <div className="header-home" style={{textAlign: 'center', justifyContent: 'center', display: 'flex', paddingTop: 90, paddingBottom: 90}}>
             <div className="sub-main">
               <div>
                 <div className="imgs">
                   <div className="container-image">
                     <img src={mainlogo} alt="profile" className="profile"/>
                   </div>
                 </div>
                 <div>
                   <h1>Login Page</h1>
                   <div className="second-input">
                     {/* <img src={mainlogo} alt="email" className="email"/> */}
                     <input type="text" placeholder="user name" className="name" value={username} onChange={e => this.setState({username: e.target.value})}/>
                   </div>
                   <div className="second-input">
                     {/* <img src={mainlogo} alt="pass" className="email"/> */}
                     <input type="password" placeholder="password" className="name" value={password} onChange={e => this.setState({password: e.target.value})}/>
                   </div>
                  <div className="login-button">
                  <button onClick={this.handleLogin}>Login</button>
                  </div>  
                    <p className="link">
                      <a href="#">Forgot password?</a> Or <a href="#">Sign Up</a>
                    </p>
                    <p style={{color: 'red'}}>{error}</p>
                 </div>
               </div>
             </div>
            </div>
          );
    }
  }