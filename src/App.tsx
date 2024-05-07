import React from "react";
import logo from "./logo.svg";
import "./App.css";
import myurl from "mvanco-react-typescript";
import Time from "./components/Time";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ms, setMs] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch('https://matoosh.eu/rest/timer/get_current_time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.error('Got data: ', data.result);
      setMs(data.result * 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [running, setRunning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  return (
    <>
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
          <Button text={(running) ? "Stop" : "Start"} onClick={() => {
            try {
              if (running) {
                fetch('https://matoosh.eu/rest/timer/stop', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                  }),
                });
              } else {
                fetch('https://matoosh.eu/rest/timer/start', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                  }),
                });
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
            setRunning(!running);
          }} />
          <Button text="Reset" onClick={() => {
            fetch('https://matoosh.eu/rest/timer/reset', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
              }),
            });
          }} />
        </div>
      </body>
    </>
  );
}

export default App;
