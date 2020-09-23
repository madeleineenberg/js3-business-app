import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
//style
import { Global } from "./styled/Global";
import { FormSection } from "./styled/Container";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Global />
      <Switch>
        <Route path="/home">
          <NavBar />
          <HomePage />
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
    </div>
  );
}

export default App;
