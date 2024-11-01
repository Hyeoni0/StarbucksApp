import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, React!</h1>
        <h2>Current Time : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
