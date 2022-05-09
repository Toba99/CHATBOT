import './style';
import { Component } from 'preact';
import mainlogo from '../components/julialogo.svg';

export default class Loginpage extends Component {
  

    render() {
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
                   <div>
                     <img src={mainlogo} alt="email" className="email"/>
                     <input type="text" placeholder="user name" className="name"/>
                   </div>
                   <div className="second-input">
                     <img src={mainlogo} alt="pass" className="email"/>
                     <input type="password" placeholder="user name" className="name"/>
                   </div>
                  <div className="login-button">
                  <button>Login</button>
                  </div>  
                    <p className="link">
                      <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
                    </p>
                 </div>
               </div>
             </div>
            </div>
          );
    }
  }