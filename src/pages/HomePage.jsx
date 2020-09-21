import React from "react";
import GetCustomers from "../components/GetCustomers";
import { Container } from "../styled/Container";

export default function HomePage() {
  return (
    <Container>
      <h1>Home</h1>
      <GetCustomers />
    </Container>
  );
}
