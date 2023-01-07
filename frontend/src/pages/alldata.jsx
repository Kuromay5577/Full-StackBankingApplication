import React from "react";
import MyCard from "../components/MyCard";
import UserContext from "../context/context.jsx";

function AllData() {
  const [show] = React.useState(true);
  const [status] = React.useState("");
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const ctx = React.useContext(UserContext);

  // function validate(field, label) {
  //   if (!field) {
  //     setStatus("Error: " + label);
  //     setTimeout(() => setStatus(""), 3000);
  //     return false;
  //   }
  //   return true;
  // }

  // function handleCreate() {
  //   console.log(name, email, password);
  //   if (!validate(name, "name")) return;
  //   if (!validate(email, "email")) return;
  //   if (!validate(password, "password")) return;
  //   ctx.users.push({ name, email, password });
  //   setShow(false);
  // }

  // function clearForm() {
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  //   setShow(true);
  // }

  return (
    <MyCard
      header="All Data"
      status={status}
      body={
        show ? (
          <>
            <h5>All Data</h5>
            <br />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Logged In</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(ctx.users).map((name) => {
                  return (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{ctx.users[name].email}</td>
                      <td>{ctx.users[name].password}</td>
                      <td>${ctx.users[name].balance}</td>
                      <td>{ctx.users[name].logged}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : null
      }
    />
  );
}

export default AllData;
