import React from "react";
import logo from "./logo.svg";
import "./App.css";
import myurl from "mvanco-react-typescript";
import Time from "./components/Time";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [ms, setMs] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. I got url {myurl} from my own published Node package.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div className="vertical-linear-layout">
          <Time ms={ms} />
          <Button text="Start" onClick={() => setMs(ms+1000)} />
        </div>
      </body>
    </div>
  );
}

export default App;
