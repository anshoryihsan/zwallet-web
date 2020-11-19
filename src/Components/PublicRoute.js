import React from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
// import { isLogin, loginAs } from "../utils";
// import { loginAs } from "../utils";

// function PublicRoute(props) {
//   const {component: Component, restricted, ...rest} = props;
//   const {token, role} = useSelector((state) => state.Auth);
//   // const auth = useSelector((state) => state.Auth);
//   // const isRestricted = token && restricted;
//   console.log({...rest}, 'sadasd');
//   return (
//     <Route
//       {...rest}
//       render={(props1) =>
//         token && restricted ? (
//           // <Redirect to="/test" />
//           <Redirect to={role === 24 ? '/admin' : '/test'} />
//         ) : (
//           // <Redirect to="/login" />
//           <Component {...props1} />
//         )
//       }
//     />
//   );
// }

const PublicRoute = ({component: Component, restricted, ...rest}) => {
  // restricted (true) = public route itu bisa diakses ga sih ketika user tidak ada token/belum login
  // restricted (false) = public
  const {token, role} = useSelector((state) => state.Auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        token && restricted ? (
          <Redirect to={role === 24 ? '/admin' : '/home'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

// contoh memberi route ngadmin
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
export default PublicRoute;
