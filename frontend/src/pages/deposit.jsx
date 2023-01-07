import React, { useContext } from "react";
import MyCard from "../components/MyCard";
import UserContext from "../context/context.jsx";

function Deposit() {
  const [show] = React.useState(true);
  const [status] = React.useState("");
  const [deposit, setDeposit] = React.useState(0);
  const ctx = useContext(UserContext);

  const setUserDeposit = () => {
    let newUsers = ctx.users;
    newUsers[Object.keys(newUsers)[0]].balance =
      newUsers[Object.keys(newUsers)[0]].balance + deposit;
    ctx.setUsers(newUsers);
  };

  return (
    <MyCard
      header="Deposit"
      status={status}
      body={
        show ? (
          <>
            Balance
            <br />
            {Object.keys(ctx.users).length > 0
              ? ctx.users[Object.keys(ctx.users)[0]].balance
              : "N/A"}
            <br />
            Deposit
            <br />
            <input
              type="input"
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
              onClick={setUserDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success deposit</h5>
          </>
        )
      }
    />
  );
}

export default Deposit;
