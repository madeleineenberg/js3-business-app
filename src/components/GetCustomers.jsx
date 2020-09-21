import React from "react";
import UserKit from "../data/UserKit";

export default function GetCustomers() {
  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <div>
        <button onClick={getCustomerList}>Get Customer List</button>
      </div>
    </div>
  );
}
