import React, { useContext } from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext(0);
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));
