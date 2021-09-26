import './style';
import { Component } from 'preact';
import { Link } from 'preact-router/match';
import mainlogo from '../components/julialogo.svg';

export default class Homepage extends Component {
  

  render() {
    return (

      <div class="header-home">
            <div class="logo-box">
                <div class="header-logo">
                    <img src={mainlogo} alt="Logo" class="logo"/>
                </div>
    
                <div class="header__list">
                    <Link activeClassName="active" href="/julia"><a href="" class="btn btn--blue">Enter Chatbot</a></Link>
                </div>
            </div>
            

            <div class="header-box">
                <h2 class="heading__primary">
                    <span class="heading__primary--main">Diagnosis through conversations</span>
                    <span class="heading__primary--sub">Not feeling too good? Use our chatbot to check for any minor illnesses.</span>
                </h2>

                <Link activeClassName="active" href="/julia"><a href="form.html" class="btn btn--white">Use Chatbot &nbsp; &nbsp; &rarr;</a></Link>
            </div>
        </div>
    );
  }
}
