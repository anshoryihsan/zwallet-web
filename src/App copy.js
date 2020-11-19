import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./Components";
import {
  Login,
  Home,
  TopUp,
  Transfer,
  Signup,
  LandigPage,
  AdminHome,
  Profile,
  PersonalInfo,
  ManagePhone,
  Password,
  Test,
} from "./Pages";
import { Provider, useSelector } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const RoutePublic = () => {
  return (
    <>
      <PublicRoute exact component={LandigPage} restricted={true} path="/" />
      <PublicRoute exact component={Test} restricted={true} path="/test" />
      <PublicRoute exact component={Login} restricted={true} path="/login" />
      <PublicRoute exact component={Signup} restricted={true} path="/signup" />
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/transfer" component={Transfer} />
      <PrivateRoute exact path="/top-up" component={TopUp} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute path="/profile/personal-info" component={PersonalInfo} />
      <PrivateRoute path="/profile/manage-phone" component={ManagePhone} />
      <PrivateRoute path="/profile/manage-password" component={Password} />
    </>
  );
};

const RoutesAdmin = () => {
  return (
    <>
      <PrivateRoute exact path="/adminn" component={AdminHome} />
    </>
  );
};

const Routes = () => {
  // const Profile = useSelector((s) => s.Profile);
  // console.log(Profile, "jkjkjkjigyggu");
  // console.log(Profile.data[0].role_id, "jkjkjkjigyggu");
  return (
    <BrowserRouter>
      <Switch>
        {Profile?.data?.role_id == 24 ? (
          <>
            <RoutesAdmin />
            <RoutePublic />
          </>
        ) : (
          <>
            <RoutePublic />
          </>
        )}
        <RoutesAdmin />
        <RoutePublic />
      </Switch>
    </BrowserRouter>
  );
};
const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loadin={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
export default App;
