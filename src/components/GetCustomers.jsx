import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";

//styles
import { GridBox } from "../styled/Grid";
import {
  SubTitle,
  CustomerInfo,
  BoldText,
  Paragraph,
  CustomerLink,
} from "../styled/Heading";
import { Ul } from "../styled/List";

export default function GetCustomers() {
  const { customerList, setCustomerList, getCustomerList } = useContext(
    CustomerContext
  );

  useEffect(() => {
    setCustomerList(getCustomerList()); // eslint-disable-next-line
    console.log(customerList);
  }, []);

  return (
    <GridBox column="1 / 3">
      {customerList && (
        <>
          <SubTitle color="rgb(240, 151, 151)">My Customers</SubTitle>
          {customerList.length === 0 ? (
            <Paragraph>You have no customers</Paragraph>
          ) : (
            customerList.map((customerItem) => {
              return (
                <Ul key={customerItem.id}>
                  <li>
                    <BoldText color="rgb(240, 151, 151)">
                      Customer:
                      <CustomerInfo>
                        <CustomerLink to={`/customer/${customerItem.id}`}>
                          {" "}
                          {customerItem.name}
                        </CustomerLink>
                      </CustomerInfo>
                    </BoldText>

                    <BoldText color="rgb(240, 151, 151)">
                      Organisation number:{" "}
                      <CustomerInfo>{customerItem.organisationNr}</CustomerInfo>
                    </BoldText>
                    <BoldText color="rgb(240, 151, 151)">
                      Reference:{" "}
                      <CustomerInfo>{customerItem.reference}</CustomerInfo>
                    </BoldText>
                  </li>
                </Ul>
              );
            })
          )}
        </>
      )}
    </GridBox>
  );
}
