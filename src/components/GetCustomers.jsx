import React, { useState } from "react";
import UserKit from "../data/UserKit";

export default function GetCustomers() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }

  function handleCreateCustomer() {
    const payload = {
      name: "My first Client",
    };
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // getCustomerList();
      });
  }

  return (
    <div>
      <div>
        <button onClick={getCustomerList}>Get My Customers</button>
        {customerList &&
          customerList.map((customerItem) => {
            return <p>{customerItem.name}</p>;
          })}
      </div>
      <button onClick={handleCreateCustomer}>Create test customer</button>
    </div>
  );
}
