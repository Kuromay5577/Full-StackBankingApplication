import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import CreateAccount from "./pages/createaccount.jsx";
// import Deposit from "./pages/deposit.jsx";
// import Withdraw from "./pages/withdraw.jsx";
// import AllData from "./pages/alldata.jsx";
import reportWebVitals from "./reportWebVitals.js";
import NavTabs from "./components/nav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./context/context.jsx";
//import { initializeParse } from "@parse/react";

// initializeParse(
//   "http://localhost:1337/parse",
//   "6yTvfeQsqXzIomLJuLJ7t8bn3HnZMvkBhd21wXZs",
//   "qgX3533kBcyikvHasOJhDx3Exbxscfw4PR6kW1pS"
// );

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <NavTabs />
      <UserContext.Provider value={{ users: [] }}>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            {/* <Route path="/deposit" element={Deposit} />
          <Route path="/withdraw" element={Withdraw} />
          <Route path="/alldata" element={AllData} /> */}
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
