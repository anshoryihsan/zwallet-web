// import React from "react";
// import Axios from "axios";
// import { Link, useHistory, useLocation } from "react-router-dom";
// // import { useForm } from "react-hook-form";
// // // import { useForm } from "react-hook-form";
// // const { register, handleSubmit } form useForm;
// // const TOKEN_KEY = "";
// const token = "";
// export const login = (data) => {
//   const url = "http://localhost:8080/api/v1/auth/login";
//   return Axios.post(url, data)
//     .then((res, err) => {
//       localStorage.setItem(token, res.data.data);
//       console.log(localStorage.getItem(token));
//       // login(res.data);
//       // if (res.data.success === true) {
//       //   console.log(res.data.data);
//       //   // console.log(res.data.success);
//       //   // setUserSession(res.data);
//       //   // props.history.push("/dashboard");
//       // } else {
//       //   console.log(res.data.data);
//       //   // console.log(res.data);
//       // }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // export const login = (email, password) => {
//   //   const url = "http://localhost:8080/api/v1/auth/login";
//   //   return Axios.post(url, {
//   //     email: email,
//   //     password: password,
//   //   });
// };
// export const setUserSession = (data) => {
//   localStorage.setItem("token", data);
// };

// export const logout = () => {
//   localStorage.removeItem(token);
// };
// export const loginAs = (props) => {
//   // sessionStorage.setItem(token, "token");
//   // console.log(sessionStorage.getItem(token));
//   if (localStorage.getItem(token)) {
//     Axios.get("http://localhost:8080/api/v1/profile/search", {
//       headers: localStorage.getItem(token),
//     }).then((res) => {
//       // console.log(res.data.role_id);
//       if (res.data.role_id == 24) return true;
//       else if (res.data.role_id == 25) return false;
//       // else return "404";
//       // if (res.data.role_id == 25) props.history.push("ngadmin");
//       // else if (res.data.role_id == 21) props.history.push("/404");
//     });
//   }
// };
// export const getToken = () => {
//   return localStorage.getItem(token) || null;
// };

// export const isLogin = () => {
//   if (localStorage.getItem(token)) {
//     return true;
//   }
//   return false;
// };

// // import Axios from 'axios';

// // export const register = (username, email, password) => {
// //   const data = {
// //     username: username,
// //     email: email,
// //     password: password,
// //     id_level: 2,
// //     balance: 200000,
// //   };
// //   const url = 'http://192.168.43.52:2000/auth/register';
// //   return Axios.post(url, data);
// // };

// // export const login = (email, password) => {
// //   const url = 'http://192.168.43.52:2000/auth/login';
// //   return Axios.post(url, {
// //     email: email,
// //     password: password,
// //   });
// // };

// // export const update = (username, password, pin, image, email) => {
// //   let data = new FormData();
// //   if (username !== null) {
// //     data.append('username', username);
// //   } else if (password !== null) {
// //     data.append('password', password);
// //   } else if (pin !== null) {
// //     data.append('pin', pin);
// //   } else if (image !== null) {
// //     data.append('image', {
// //       uri: `file://${image.path}`,
// //       type: image.type,
// //       name: image.fileName,
// //       size: image.fileSize,
// //     });
// //   }
// //   data.append('email', email);
// //   const config = {
// //     headers: {
// //       'content-type': 'multipart/form-data',
// //       contentType: false,
// //       mimeType: 'multipart/form-data',
// //       'cache-control': 'no-cache',
// //       accept: 'application/json',
// //     },
// //   };
// //   const url = 'http://192.168.43.52:2000/auth/update';
// //   return Axios.patch(url, data, config);
// // };

// // export const deleteUser = (email) => {
// //   const uri = `http://192.168.43.52:2000/auth/delete?email=${email}`;
// //   return Axios.delete(uri);
// // };

// // export const getUser = (email) => {
// //   const url = `http://192.168.43.52:2000/auth/?email=${email}`;
// //   return Axios.get(url);
// // };

// // export const updatePassword = (password, newPassword, email) => {
// //   const url = `http://192.168.43.52:2000/auth/updatepass?email=${email}`;
// //   return Axios.post(url, {
// //     password: password,
// //     newPassword: newPassword,
// //   });
// // };

// // export const getContact = (id) => {
// //   const url = `http://192.168.43.52:2000/contact?id=${id}&page=1&limit=10`;
// //   return Axios.get(url);
// // };
// // export const getMoreContact = (id, page) => {
// //   const url = `http://192.168.43.52:2000/contact?id=${id}&page=${page}&limit=3`;
// //   return Axios.get(url);
// // };

// // export const searchcontact = (name) => {
// //   const url = `http://192.168.43.52:2000/contact/search?name=${name}`;
// //   return Axios.get(url);
// // };

// // export const doTransaction = (
// //   sender_id,
// //   receiver_id,
// //   transaction_name,
// //   transaction_type,
// //   amount,
// //   note,
// //   balance,
// // ) => {
// //   const data = {
// //     sender_id: sender_id,
// //     receiver_id: receiver_id,
// //     trans_name: transaction_name,
// //     trans_type: transaction_type,
// //     amount: amount,
// //     notes: note,
// //     balance: balance,
// //   };
// //   const url = 'http://192.168.43.52:2000/transaction/dotrans';
// //   return Axios.post(url, data);
// // };
// // export const getSampleHistory = (id) => {
// //   const url = `http://192.168.43.52:2000/transaction?id=${id}&page=1&limit=4`;
// //   return Axios.get(url);
// // };

// // export const getHistory = (id) => {
// //   const url = `http://192.168.43.52:2000/transaction?id=${id}&page=1&limit=20`;
// //   return Axios.get(url);
// // };

// // export const getMoreHistory = (id, page) => {
// //   const url = `http://192.168.43.52:2000/transaction?id=${id}&page=${page}&limit=5`;
// //   return Axios.get(url);
// // };

// // export const getEmail = (email) => {
// //   const url = `http://192.168.43.52:2000/auth/getemail?email=${email}`;
// //   return Axios.get(url);
// // };
// // export const resetPassword = (password, email) => {
// //   const url = `http://192.168.43.52:2000/auth/resetpass?email=${email}`;
// //   return Axios.post(url, {
// //     password: password,
// //   });
// // };
// // export const updatePhone = (phone, email) => {
// //   const url = `http://192.168.43.52:2000/auth/phone?email=${email}`;
// //   return Axios.patch(url, {
// //     phone: phone,
// //   });
// // };

// // export const notif = (sender, receiver, amount, trans_type) => {
// //   const url = 'http://192.168.43.52:2000/transaction/notif';
// //   return Axios.post(url, {
// //     sender_id: sender,
// //     receiver_id: receiver,
// //     amount: amount,
// //     transaction_type: trans_type,
// //   });
// // };
