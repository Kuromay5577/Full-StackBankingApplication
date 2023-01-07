import React, { useContext } from "react";
import MyCard from "../components/MyCard";
import UserContext from "../context/context.jsx";

function Withdraw() {
  const [show] = React.useState(true);
  const [status] = React.useState("");
  const [withdraw, setWithdraw] = React.useState(0);
  const ctx = useContext(UserContext);

  const setUserWithdraw = () => {
    let newUsers = ctx.users;
    newUsers[Object.keys(newUsers)[0]].balance =
      newUsers[Object.keys(newUsers)[0]].balance - withdraw;
    ctx.setUsers(newUsers);
  };

  return (
    <MyCard
      bgcolor="blue#7b6767"
      header="Withdraw"
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
            Withdraw
            <br />
            <input
              type="input"
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
              onClick={setUserWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : null
      }
    />
  );
}

export default Withdraw;
