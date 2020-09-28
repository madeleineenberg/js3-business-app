import React, { useState, useEffect } from "react";

//data
import UserKit from "../data/UserKit";

//context
import { CustomerContext } from "../contexts/CustomerContext";

//Components
import GetCustomers from "../components/GetCustomers";
import UserInfo from "../components/UserInfo";

//styles
import { Container } from "../styled/Container";
import { Heading } from "../styled/Heading";
import CreateCustomer from "../components/CreateCustomer";
import { Grid } from "../styled/Grid";

export default function HomePage() {
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
    <>
      <Container>
        <Heading>Dashboard </Heading>
        <CustomerContext.Provider
          value={{ getCustomerList, customerList, setCustomerList }}
        >
          <Grid>
            <UserInfo />
            <GetCustomers />

            <CreateCustomer />
          </Grid>
        </CustomerContext.Provider>
      </Container>
    </>
  );
}
