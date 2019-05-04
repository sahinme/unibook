import * as React from "react";
import "./App.css";
import Dashboard from "./Dashboard";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Dashboard />
      </div>
    );
  }
}

export default App;
