import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector((state) => state.Auth);
  const { userdata } = useSelector((state) => state.User);
  // const {isLogin} = useSelector((state) => state.Auth);
  // console.log(useSelector((state) => state.Auth));
  return (
    <Route
      {...rest}
      render={(props) =>
        token || userdata ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

//  <Route
// {...rest}
// render={(props) =>
//   isLogin() && restricted ? (
//     loginAs("admin") ? (
//       <Redirect to="/ngadmin" />
//     ) : (
//       <Redirect to="/dashboard" />
//     )
//   ) : (
//     <Component {...props} />
//   )
// }

export default PrivateRoute;
