import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo List App from <a
          className="App-link"
          href='https://youtu.be/93p3LxR9xfM'
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Crash Curse with React
        </a></p>
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
