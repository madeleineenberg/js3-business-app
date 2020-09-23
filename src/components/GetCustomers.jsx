import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { CustomerContext } from "../contexts/CustomerContext";
import CreateCustomer from "./CreateCustomer";

export default function GetCustomers() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList();
  }, []);

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCustomerList(data.results);
      });
  }

  return (
    <div>
      <CustomerContext.Provider
        value={{ getCustomerList, customerList, setCustomerList }}
      >
        <div>
          {/* <button onClick={getCustomerList}>Get My Customers</button> */}
          <h2>My Customers</h2>
          {customerList &&
            customerList.map((customerItem) => {
              return (
                <div key={customerItem.id}>
                  <p>Customer: {customerItem.name}</p>
                  <p>Organisation number: {customerItem.organisationNr}</p>
                  <p>Reference: {customerItem.reference}</p>
                  <hr />
                </div>
              );
            })}
        </div>
        <CreateCustomer />
      </CustomerContext.Provider>
    </div>
  );
}
