import React, { useState } from "react";
import UserKit from "../data/UserKit";

//style
import { Form, Input, Label } from "../styled/Form";
import { SubmitButton } from "../styled/Buttons";
import { MediumHeading } from "../styled/Heading";

export default function RegisterForm() {
  const userKit = new UserKit();

  //VARIABLER FÖR REGISTRERING
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
    alert(`Check your mail and follow the link to activate your account `);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setOrganisationName("");
    setOrganisationKind("");
  }

  return (
    <Form>
      <MediumHeading color="#ccc">Register</MediumHeading>
      <div>
        <Label>First Name</Label>
        <Input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <Label>Last Name</Label>
        <Input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label>Password</Label>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Label>Organisation Name</Label>
        <Input
          placeholder="Organisation Name"
          value={organisationName}
          onChange={(e) => setOrganisationName(e.target.value)}
        />
      </div>
      <div>
        <Label>Organisation Kind</Label>
        <Input
          placeholder="Organisation Kind (0, 1, 2)"
          value={organisationKind}
          onChange={(e) => setOrganisationKind(e.target.value)}
        />
      </div>

      <SubmitButton onClick={handleRegister}>Register</SubmitButton>
    </Form>
  );
}
