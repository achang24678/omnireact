import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logowhite from './img/logo-white.png';
import logo from './img/logo.png';


import * as serviceWorker from './serviceWorker';




const App = () => {
    return (
        <div></div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
