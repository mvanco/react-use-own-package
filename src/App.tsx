import React from "react";
import logo from "./logo.svg";
import "./App.css";
import myurl from "mvanco-react-typescript";
import Time from "./components/Time";
import Button from "./components/Button";
import LaunchButton from "./components/LaunchButton";
import { useState, useEffect } from "react";

function App() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(true);

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
      setRunning(data.running);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
      <body>
        <div id="root" className="vertical-linear-layout">
          <Time ms={ms} style={(running) ? { flex: 1} : { flex: 1, color: "red"}}/>
          <LaunchButton type={(running) ? "stop" : "start"} onClick={() => {
            try {
              if (running) {
                fetch('https://matoosh.eu/rest/timer/stop', {
                  method: 'POST'
                });

                
              } else {
                fetch('https://matoosh.eu/rest/timer/start', {
                  method: 'POST'
                });
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
            setRunning(!running);
          }} />
          <LaunchButton type="reset" onClick={() => {
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
