import React from "react";

//Components
import GetCustomers from "../components/GetCustomers";
import UserInfo from "../components/UserInfo";

//styles
import { Container } from "../styled/Container";
import { SubTitle } from "../styled/Heading";

export default function HomePage() {
  return (
    <Container>
      <SubTitle>Welcome To My Business App</SubTitle>
      <UserInfo />
      <GetCustomers />
    </Container>
  );
}
