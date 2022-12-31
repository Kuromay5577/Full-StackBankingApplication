import { UserContext } from "./context";
import React from "react";
import Card from "./card";
import "./index.css";

function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [withdraw, setWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(balance, withdraw);
    if (!validate(withdraw, "withdraw")) return;
    setBalance((balance) => balance - withdraw);
    //setShow(false);
  }

  const moneyWithdraw = ({ onChange }) => {
    return (
      <label className="label huge">
        Withdraw:
        <input type="number" onChange={onChange}></input>
        <input type="submit" value="Submit" onClick={handleSubmit}></input>
      </label>
    );
  };

  const Account = () => {
    let transactionState = 0;
    const [totalState, setTotalState] = React.useState(0);
    let status = "Account Balance $ ${totalState}";
    console.log("Account Rendered");
    const handleChange = (event) => {
      console.log("handleChange ${event.target.value}");
      setAccountState(event.target.value);
    };
    const handleSubmit = () => {
      setTotalState(totalState - transactionState);

      event.prreventDefault();
    };
  };
  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance
            <br />
            {balance}
            <br />
            Withdraw
            <br />
            <input
              type="number"
              className="form-control"
              id="withdraw"
              placeholder="Enter Withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(Number(e.currentTarget.value))}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Withdraw
            </button>
          </>
        ) : (
          <></>
        )
      }
    />
  );
}

export default Withdraw;
