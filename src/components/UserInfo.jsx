import React, { useState, useEffect } from "react";
import UserKit from "../data/UserKit";

export default function UserInfo() {
  const [onlineUser, setOnlineUser] = useState([]);
  const userKit = new UserKit();

  useEffect(() => {
    getUserInfo(); // eslint-disable-next-line
  }, []);

  function getUserInfo() {
    userKit
      .getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setOnlineUser(data);
      });
  }
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
