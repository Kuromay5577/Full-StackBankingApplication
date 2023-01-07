import React from "react";
import MyCard from "../components/MyCard";
import UserContext from "../context/context.jsx";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate() {
    return email.length > 0 && password.length > 0;
  }

  function handlCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    let newUsers = ctx.users;
    newUsers[name] = {
      email: email,
      password: password,
      balance: 0,
      logged: false,
    };

    ctx.setUsers(newUsers);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <MyCard
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <div>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div>
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div>
              Password
              <br />
              <input
                type="input"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-light"
              onClick={handlCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-ight" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
export default CreateAccount;
