import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserInfo() {
  const { onlineUser, setOnlineUser, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    setOnlineUser(getUserInfo()); // eslint-disable-next-line
  }, []);
  return (
    <div>
      {onlineUser && (
        <div>
          <h2>Your Details</h2>
          <p>{onlineUser.firstName}</p>
          <p>{onlineUser.lastName}</p>
          <p>{onlineUser.email}</p>
        </div>
      )}
    </div>
  );
}
