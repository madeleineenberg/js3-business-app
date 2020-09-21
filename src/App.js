import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
//style
import { Global } from "./styled/Global";
import { Heading } from "./styled/Heading";
import { FormSection } from "./styled/Container";

function App() {
  return (
    <div>
      <Global />
      {/* <Heading>Business Project</Heading> */}
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/login">
          <FormSection>
            <LoginPage />
          </FormSection>
        </Route>
        <Route path="/">
          <FormSection>
            <RegisterPage />
          </FormSection>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
