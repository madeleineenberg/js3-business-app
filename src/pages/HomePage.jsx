import React, { useState, useEffect, useContext } from "react";
import UserKit from "../data/UserKit";
import { CustomerContext } from "../contexts/CustomerContext";
import { UserContext } from "../contexts/UserContext";

//Components
import GetCustomers from "../components/GetCustomers";
import UserInfo from "../components/UserInfo";

//styles
import { Container } from "../styled/Container";
import { Paragraph, Heading } from "../styled/Heading";
import CreateCustomer from "../components/CreateCustomer";

//styles
import { Grid } from "../styled/Grid";

export default function HomePage() {
  const userKit = new UserKit();
  const [customerList, setCustomerList] = useState([]);
  const { onlineUser, setOnlineUser, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getCustomerList(); // eslint-disable-next-line
    setOnlineUser(getUserInfo());
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
