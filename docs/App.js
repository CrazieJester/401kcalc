import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TextField } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="ExplanationHeader">401k Front-loading calculator</div>
      <div className="Explanation">
        This is a calculator that will show the most efficient way of
        "front-loading" 401k contributions, ensuring that as much money as
        possible gets exposure as soon as possible. For more information, see
        the following link that the calculator is based on. (credit to
        u/LegitosaurusRex for the calculations) <br />
        <a
          className="App-link"
          href="https://www.reddit.com/r/personalfinance/comments/b4yeby/401k_front_loading_calculator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.reddit.com/r/personalfinance/comments/b4yeby/401k_front_loading_calculator/
        </a>
      </div>

      <TextField
        className
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <div className="MoneyPig">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
