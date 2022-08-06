import React, { useState } from "react";
import "./App.css";
import getResponse from "./magic8ball";

function App() {
  const [response, setResponse] = useState<string>(getResponse());

  return (
    <div className="App">
      <div className="App-header">
        <span data-testid="response">{response}</span>
        <div className="shakeBtn">
          <button onClick={() => setResponse(getResponse())}>Shake</button>
        </div>
      </div>
    </div>
  );
}

export default App;
