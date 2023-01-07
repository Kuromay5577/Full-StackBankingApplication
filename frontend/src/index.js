import React, { useMemo, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import {
  Router,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "../src/components/nav";
import Home from "./pages/home.jsx";
import CreateAccount from "./pages/createaccount.jsx";
import Deposit from "./pages/deposit.jsx";
import Alldata from "./pages/alldata.jsx";
import Login from "./pages/login.jsx";
import Logout from "./pages/logout.jsx";
import Withdraw from "./pages/withdraw.jsx";
import reportWebVitals from "./reportWebVitals.js";
//import NavTabs from "./components/nav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./context/context.jsx";
//import { initializeParse } from "@parse/react";

// initializeParse(
//   "http://localhost:1337/parse",
//   "6yTvfeQsqXzIomLJuLJ7t8bn3HnZMvkBhd21wXZs",
//   "qgX3533kBcyikvHasOJhDx3Exbxscfw4PR6kW1pS"
// );

const LoginContainer = () => {
  return (
    <Router>
      <Routes>
        <div className="container">
          <Route exact path="/" render={() => <Navigate to="/login" />} />
          <Route path="login" element={<Login />} />
          <Route path="createaccount" element={<CreateAccount />} />
        </div>
      </Routes>
    </Router>
  );
};

function DefaultContainer() {
  const [users, setUsers] = useState({});
  const providedValue = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  return (
    <div>
      {/* <Header toggleAlert={this.toggleAlert} /> */}
      <div className="container">
        <NavBar />
        <UserContext.Provider value={providedValue}>
          <Route path="/" element={<Home />} />
          <Route path="logout" element={<Logout />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="alldata" element={<Alldata />} />
          {/* {this.state.isAlertOpen ? <Alert /> : null} */}
        </UserContext.Provider>
      </div>
    </div>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
