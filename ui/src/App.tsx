import React, { useState } from "react";
import "./App.css";
import getResponse from "./magic8ball";

function App() {
  const [response, setResponse] = useState<string>(getResponse());
  const [displayed, setDisplayed] = useState<boolean>(true);

  const shakeBall = () => {
    setDisplayed(false);
    setTimeout(() => {
      setResponse(getResponse());
      setDisplayed(true);
    }, 1000);
  }

  return (
    <div className="App">
      <div className="App-header">
        {displayed &&
          <>
            <span className="fadeIn" data-testid="response">{response}</span>
            <span onClick={shakeBall} className="askAgain">Ask Again?</span>
          </>
        }
      </div>
    </div>
  );
}

export default App;
