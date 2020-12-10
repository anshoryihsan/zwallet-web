import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Components";
import {
  Login,
  Signup,
  Home,
  Transfer,
  Amountbank,
  Confirm,
  Status,
  TopUp,
  Profile,
  LandingPage,
  PersonalInfo,
  ManagePhone,
  ChangePhone,
  ChangePassword,
  ChangePin,
  AdminHome,
  Test,
} from "./Pages";
// import {Test} from './Pages/Test'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route exact component={LandingPage} path="/test2" />
        <PublicRoute exact component={Login} restricted={true} path="/login" />
        <PublicRoute
          exact
          component={Signup}
          restricted={true}
          path="/signup"
        />
        <PrivateRoute exact component={Home} path="/home" />
        <PrivateRoute exact component={Transfer} path="/transfer" />
        <PrivateRoute component={Amountbank} path="/transfer/amount-bank" />
        <PrivateRoute component={Confirm} path="/transfer/confirm" />
        <PrivateRoute component={Status} path="/transfer/status" />
        <PrivateRoute exact component={TopUp} path="/top-up" />
        <PrivateRoute exact component={Profile} path="/profile" />
        <PrivateRoute component={PersonalInfo} path="/profile/personal-info" />
        <PrivateRoute component={ManagePhone} path="/profile/manage-phone" />
        <PrivateRoute component={ChangePhone} path="/profile/change-phone" />
        <PrivateRoute
          component={ChangePassword}
          path="/profile/change-password"
        />
        <PrivateRoute component={ChangePin} path="/profile/change-pin" />
        {/* <PublicRoute exact component={Test} restricted={true} path="/test" /> */}
        {/* 
        <PublicRoute exact component={LandingPage} restricted={true} path="/test" /> 
      */}

        <PrivateRoute exact path="/admin" component={AdminHome} />
      </Switch>
    </Router>
  );
}
export default App;
