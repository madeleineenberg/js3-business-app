import React, { useState } from "react";
import UserKit from "../data/UserKit";

//style
import { Form, Input, Label } from "../styled/Form";
import { SubmitButton } from "../styled/Buttons";
import { SubTitle } from "../styled/Heading";

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
  }

  // FUNKTION FÖR ATT RENDERA FLERA INPUT MED MINDRE KOD

  function renderInput(index, placeholder, stateVariable, stateSetVariable) {
    return (
      <div key={index}>
        <Label>{placeholder}</Label>
        <Input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </div>
    );
  }
  // ARRAY MED VAD INPUTS SKA INNEHÅLLA
  const inputObjects = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0,1,2)", organisationKind, setOrganisationKind],
  ];

  return (
    <Form>
      <SubTitle color="#ccc">Register</SubTitle>
      <p>Enter details to register</p>
      {/* ETT ANNAT SÄTT ATT RENDERA FLERA INPUT PÅ ETT KORTARE SÄTT */}
      {inputObjects.map((inputItem, index) => {
        return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
      })}
      <SubmitButton onClick={handleRegister}>Register</SubmitButton>
    </Form>
  );
}

//VANLIGA SÄTTET ATT SKRIVA INPUT
{
  /* <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Organisation Name"
        value={organisationName}
        onChange={(e) => setOrganisationName(e.target.value)}
      />
      <input
        placeholder="Organisation Kind (0, 1, 2)"
        value={organisationKind}
        onChange={(e) => setOrganisationKind(e.target.value)}
      /> */
}
