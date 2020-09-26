import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import { CustomerContext } from "../contexts/CustomerContext";

//styles
import { GridBox } from "../styled/Grid";
import { SubTitle, Paragraph, Span } from "../styled/Heading";
import { TextWrapper } from "../styled/Container";

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
                <TextWrapper key={customerItem.id}>
                  <Span>
                    Customer:
                    <Paragraph>
                      <Link to={`/customer/${customerItem.id}`}>
                        {customerItem.name}
                      </Link>
                    </Paragraph>
                  </Span>
                  <Span>
                    Organisation number:{" "}
                    <Paragraph>{customerItem.organisationNr}</Paragraph>
                  </Span>
                  <Span>
                    Reference: <Paragraph>{customerItem.reference}</Paragraph>
                  </Span>
                  <hr />
                </TextWrapper>
              );
            })
          )}
        </>
      )}
    </GridBox>
  );
}
