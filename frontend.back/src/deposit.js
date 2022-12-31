import React from "react";
import { UserContext } from "./context";
import Card from "./card";
import "./index.css";

function Deposit() {
  const [show] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [deposit, setDeposit] = React.useState(0);
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
    console.log(balance, deposit);
    if (!validate(deposit, "deposit")) return;
    setBalance((balance) => balance + deposit);
    //setShow(false);
  }

  const moneyDeposit = ({ onChange }) => {
    return (
      <label className="label huge">
        Deposit:
        <input type="number" onChange={onChange}></input>
        {/* <input type="submit" value="Submit" onClick={handleSubmit}></input> */}
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
      //      setAccountState(event.target.value);
    };
    const handleSubmit = () => {
      setTotalState(totalState + transactionState);

      //      event.prreventDefault();
    };
  };

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
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
              id="deposit"
              placeholder="Enter Deposit"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Deposit
            </button>
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
export default Deposit;
