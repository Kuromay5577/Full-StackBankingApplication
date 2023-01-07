import React from "react";
import MyCard from "../components/MyCard";
import UserContext from "../context/context.jsx";

function Login() {
  const [show, setShow] = React.useState(true);
  const [status] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleLoginb() {
    console.log(email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    let newUsers = ctx.users;
    Object.keys(newUsers).forEach((key) => {
      const user = newUsers[key];
      if (user.email === email && user.password === password) {
        user.logged = true;
      } else {
        user.logged = false;
      }
      newUsers[key] = user;
    });
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
      header="Login"
      onSubmit={handleSubmit}
      status={status}
      body={
        show ? (
          <>
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
              onClick={handleLoginb}
            >
              Login
            </button>

            <button className="btn btn-light">
              <a href="/#/createaccount">
                Dont't have an account? Create Account Here
              </a>
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-ight" onClick={clearForm}>
              see your account
            </button>
          </>
        )
      }
    />
  );
}
export default Login;
