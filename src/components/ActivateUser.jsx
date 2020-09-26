import React from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import { SubmitButton } from "../styled/Buttons";
import { MediumHeading } from "../styled/Heading";
import { Container } from "../styled/Container";

export default function ActivateUser({ uid, setUid, token, setToken }) {
  const history = useHistory();
  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login");
    });
  }
  return (
    <Container>
      <MediumHeading>Activate Account</MediumHeading>
      <SubmitButton onClick={handleActivateUser}>
        Activate Your Account
      </SubmitButton>
    </Container>
  );
}
