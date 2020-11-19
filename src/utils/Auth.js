// import Axios from "axios";
// // import { useForm } from "react-hook-form";
// // // import { useForm } from "react-hook-form";
// // const { register, handleSubmit } form useForm;
// const TOKEN_KEY = "jwt";
// // const token = "jwt";
// export const setUserSession = (token) => {
//   // const onSubmit = (data) => login(data);
//   // const username = useFormInput("");
//   // const password = useFormInput("");
//   sessionStorage.setItem(TOKEN_KEY, token);
//   // console.log(data);
// };

// export const logout = () => {
//   sessionStorage.removeItem(TOKEN_KEY);
// };
// export const loginAs = (token_) => {
//   // console.log(sessionStorage.getItem(token));
//   if (sessionStorage.getItem(token)) {
//     Axios.get("http://localhost:8080/api/v1/profile/search", {
//       headers: token_,
//       // headers: sessionStorage.getItem(TOKEN_KEY),
//     }).then((res) => {
//       console.log(res.data);
//       if (res.data.role_id == 24);
//       // if (res.data.role_id == 24) props.history.push("/ngadmin");
//       // else if (res.data.role_id == 21) props.history.push("/404");
//     });
//   }
// };
// export const getToken = () => {
//   return sessionStorage.getItem(TOKEN_KEY) || null;
// };

// // export const isLogin = () => {
// //   if (sessionStorage.getItem(token)) {
// //     return true;
// //   }
// //   return false;
// // };
