import React from "react";
import MyCard from "../components/MyCard.jsx";
import Bank from "../components/bank.png";

function Home() {
  return (
    <MyCard
      bgcolor="primary"
      txtcolor="white"
      header="Welcome to the Bank"
      title="Welcome to the bank"
      text="For all your banking needs."
      body={<img src={Bank} className="img-fluid" alt="Responsive" />}
    />
  );
}
export default Home;
