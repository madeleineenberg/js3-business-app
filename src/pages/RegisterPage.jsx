import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Container } from "../styled/Container";
import { SubTitle } from "../styled/Heading";

export default function RegisterPage() {
  return (
    <Container>
      <SubTitle>Register</SubTitle>
      <p>Enter details to register</p>
      <RegisterForm />
    </Container>
  );
}
