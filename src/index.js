import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logowhite from './img/logo-white.png';
import logo from './img/logo.png';


import * as serviceWorker from './serviceWorker';




const App = () => {
    return (
        <header>
            <nav>
                <div class="row">
                    <img src={logowhite} alt="Omnifood logo" class="logo" />
                    <img src={logo} alt="Omnifood logo" class="logo-black" />
                    <ul class="main-nav js--main-nav">
                        <li><a href="https://react-project-2.herokuapp.com/">Project</a></li>
                        <li><a href="#features">Food delivery</a></li>
                        <li><a href="#works">How it works</a></li>
                        <li><a href="#cities">Our cities</a></li>
                        <li><a href="#plans">Sign up</a></li>
                    </ul>
                    <a class="mobile-nav-icon js--nav-icon"><ion-icon name="menu" class="mobile-nav-i"></ion-icon></a>
                </div>
            </nav>
        </header>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
