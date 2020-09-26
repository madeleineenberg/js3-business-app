import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserKit from "./data/UserKit";
import { UserContext } from "./contexts/UserContext";
//style
import { Global } from "./styled/Global";
import { FormSection } from "./styled/Container";
import NavBar from "./components/NavBar";
import CustomerDetailPage from "./pages/CustomerDetailPage";

function App() {
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
    <>
      <Global />
      <UserContext.Provider value={{ onlineUser, setOnlineUser, getUserInfo }}>
        <Switch>
          <Route
            path="/customer/:id"
            render={(props) => {
              return (
                <>
                  <NavBar />
                  <CustomerDetailPage {...props} />
                </>
              );
            }}
          ></Route>
          <Route path="/home">
            <NavBar />
            <FormSection>
              <HomePage />
            </FormSection>
          </Route>
          <Route path="/login">
            <NavBar />
            <FormSection>
              <LoginPage />
            </FormSection>
          </Route>
          <Route path="/">
            <NavBar />
            <FormSection>
              <RegisterPage />
            </FormSection>
          </Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
