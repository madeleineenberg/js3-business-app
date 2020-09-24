import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";
import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";
import CreateCustomer from "./CreateCustomer";

export default function GetCustomers() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    getCustomerList(); // eslint-disable-next-line
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
          {customerList.length === 0 ? (
            <p>You have no customers</p>
          ) : (
            customerList.map((customerItem) => {
              return (
                <div key={customerItem.id}>
                  <p>
                    Customer:{" "}
                    <Link to={`/customer/${customerItem.id}`}>
                      {customerItem.name}
                    </Link>
                  </p>
                  <p>Organisation number: {customerItem.organisationNr}</p>
                  <p>Reference: {customerItem.reference}</p>
                  <hr />
                </div>
              );
            })
          )}
        </div>
        <CreateCustomer />
      </CustomerContext.Provider>
    </div>
  );
}
