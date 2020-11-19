import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { PublicRoute, PrivateRoute } from "./Components";
import {
  Login,
  Home,
  TopUp,
  Transfer,
  Signup,
  LandigPage,
  Profile,
} from "./Pages";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact component={LandigPage} restricted={true} path="/" />
        <PublicRoute exact component={Login} restricted={true} path="/login" />
        <PublicRoute
          exact
          component={Signup}
          restricted={true}
          path="/signup"
        />
        <PublicRoute exact path="/home" component={Home} />
        <PublicRoute exact path="/transfer" component={Transfer} />
        <PublicRoute exact path="/top-up" component={TopUp} />
        <PublicRoute exact path="/profile" component={Profile} />
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
