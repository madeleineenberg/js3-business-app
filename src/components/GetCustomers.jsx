import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";

//styles
import { GridBox } from "../styled/Grid";
import { SubTitle } from "../styled/Heading";

export default function GetCustomers() {
  const { customerList, setCustomerList, getCustomerList } = useContext(
    CustomerContext
  );

  useEffect(() => {
    setCustomerList(getCustomerList()); // eslint-disable-next-line
    console.log(customerList);
  }, []);

  return (
    <GridBox column="span 2">
      {customerList && (
        <div>
          <SubTitle>My Customers</SubTitle>
          {customerList.length === 0 ? (
            <p>You have no customers</p>
          ) : (
            customerList.map((customerItem) => {
              return (
                <div key={customerItem.id}>
                  <p>
                    Customer:
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
      )}
    </GridBox>
  );
}
