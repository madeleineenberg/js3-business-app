import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import ActivateUser from "./ActivateUser";
//styles
import { Container } from "../styled/Container";
import { Form, Input, Label } from "../styled/Form";
import { MediumHeading } from "../styled/Heading";
import { SubmitButton } from "../styled/Buttons";

export default function LoginForm() {
  const userKit = new UserKit();

  //variabler för inloggning
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //PLOCKA UT TOKEN OCH UID
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);

  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));
  // console.log(uid, token);

  function handleLogin() {
    userKit
      .login(loginEmail, loginPassword)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token);

        history.push("/home");
      });
  }

  return (
    <Container>
      {uid && token ? (
        <ActivateUser
          uid={uid}
          setUid={setUid}
          setToken={setToken}
          token={token}
        />
      ) : (
        <Form>
          <MediumHeading color="#ccc">Login</MediumHeading>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            placeholder="Password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <SubmitButton onClick={handleLogin}>Login</SubmitButton>
        </Form>
      )}
    </Container>
  );
}
