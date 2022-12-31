import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./navbar";
import { HashRouter, Route } from "react-router-dom";
import UserContext from "./context";
import Home from "./home";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeParse } from "@parse/react";

initializeParse(
  "http://localhost:1337/parse",
  "6yTvfeQsqXzIomLJuLJ7t8bn3HnZMvkBhd21wXZs",
  "qgX3533kBcyikvHasOJhDx3Exbxscfw4PR6kW1pS"
);

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users: [] }}>
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Spa />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
