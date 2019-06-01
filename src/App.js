import React from 'react';
import Typed from 'react-typed';


import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <Typed strings={['here you can find anything . . .', 'chuj chuj chuj elo elo elo ']} typeSpeed={10}/>
                </p>
            </header>
        </div>
    );
}

export default App;
