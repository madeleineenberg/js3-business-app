import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { GridBox } from "../styled/Grid";
import { SubTitle } from "../styled/Heading";

export default function UserInfo() {
  const { onlineUser, setOnlineUser, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    setOnlineUser(getUserInfo()); // eslint-disable-next-line
  }, []);
  return (
    <GridBox column="1 / span 4" color="peachpuff">
      {onlineUser && (
        <div>
          <SubTitle>Your Details</SubTitle>
          <p>
            Name: {onlineUser.firstName} {onlineUser.lastName}
          </p>

          <p>Email: {onlineUser.email}</p>
        </div>
      )}
    </GridBox>
  );
}
