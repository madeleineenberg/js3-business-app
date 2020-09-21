import React from "react";
import GetCustomers from "../components/GetCustomers";
import { Container } from "../styled/Container";
import { SubTitle } from "../styled/Heading";

export default function HomePage() {
  return (
    <Container>
      <SubTitle>Welcome To My Business App</SubTitle>
      <GetCustomers />
    </Container>
  );
}
