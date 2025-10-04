import React, { useState } from "react";
import "./App.css";
import getResponse from "./magic8ball";

const overrideParam = 'ab'

function App() {
  const getFoutune = (): string => {
    const params = new URLSearchParams(window.location.search);
    if (params.has(overrideParam) && params.get(overrideParam)) {
      return atob(params.get(overrideParam)!);
    } else {
      return getResponse();
    }
  };

  const [response, setResponse] = useState<string>(getFoutune());
  const [displayed, setDisplayed] = useState<boolean>(true);


  const shakeBall = () => {
    setDisplayed(false);
    setTimeout(() => {
      setResponse(getResponse());
      setDisplayed(true);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="App-header">
        {displayed && (
          <>
            <span className="fadeIn" data-testid="response">
              {response}
            </span>
            <span onClick={shakeBall} className="askAgain">
              Try Again?
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
