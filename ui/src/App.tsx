import React, { useState } from "react";
import "./App.css";
import getResponse from "./magic8ball";

function App() {
  const [response, setResponse] = useState<string>(getResponse());

  return (
    <div className="App">
      <header className="App-header">
        <div className="response" data-testId="response">
          {response}
        </div>
        <button onClick={() => setResponse(getResponse())}>Try Again</button>
      </header>
    </div>
  );
}

export default App;
