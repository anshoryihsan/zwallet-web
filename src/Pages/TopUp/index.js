// import React from "react";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { AuthLogout } from "../../redux/actions/Auth";
// import { useDispatch, useSelector } from "react-redux";
// import { getTopUp } from "../../redux/actions/TopUp";
// import Auth from "../../redux/reducers/Auth";
// // import "./home.css";
// import { Header, Footer } from "../../Components";
// const Nav = () => {
//   const dispatch = useDispatch();
//   const TopUp = useSelector((s) => s.TopUp);
//   let history = useHistory();
//   const Auth = useSelector((s) => s.Auth);
//   React.useEffect(() => {
//     dispatch(
//       getTopUp({
//         token: Auth.data,
//       })
//     );
//     // console.log(profile[0], "dataaasdk SEARCH");
//   }, []);
//   const onLogout = () => {
//     dispatch(AuthLogout());
//     history.replace("/login");
//   };
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm nav-bar nav-mobile-l">
//         <div class=" container d-flex justify-content-between align-items-center ">
//           <a class="h4 font-weight-bold txt-blue" href="./home.html">
//             {" "}
//             Zwallet{" "}
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="justify-content-end collapse navbar-collapse"
//             id="navbarNavAltMarkup"
//           >
//             <div class="navbar-nav d-lg-flex flex-lg-row align-items-center">
//               {/* <!-- profile --> */}
//               <div class="d-flex align-items-center">
//                 <img
//                   class="mobile-l"
//                   src="/assets/img/user-photo.svg"
//                   alt="user"
//                   height="50px"
//                   width="50px"
//                 />
//               </div>
//               <div class="d-flex flex-column align-items-center mx-3">
//                 <span class="p-0 font-weight-bold small">Robert Chandler</span>
//                 <span class="p-0 small text-black-50">+62 813-9387-7946</span>
//               </div>
//               <div class="d-flex align-items-center">
//                 <img
//                   class="mobile-l bel"
//                   src="/assets/img/icon/bell-icon.svg"
//                   alt="notif"
//                   height=""
//                 />
//               </div>
//               {/* <!-- end profile --> */}
//               <div class="">
//                 <ul class="">
//                   <li class="d-flex align-items-center my-4 active">
//                     <img
//                       alt="dashboard"
//                       src="/assets/img/icon/dashboard-icon-active.svg"
//                       height="24px"
//                       width="24px"
//                     />
//                     <a href="./home.html" class="txt-blue">
//                       <h6 class="ml-2 mb-0">Dashboard</h6>
//                     </a>
//                   </li>
//                   <li class="d-flex align-items-center my-4">
//                     <img
//                       alt="transfer"
//                       src="/assets/img/icon/arrow-up.svg"
//                       height="24px"
//                       width="24px"
//                     />
//                     <a href="/transfer/transfer.html" class="text-dark">
//                       <h6 class="ml-2 mb-0">Transfer</h6>
//                     </a>
//                   </li>
//                   <li class="d-flex align-items-center my-4">
//                     <img
//                       alt="plus"
//                       src="/assets/img/icon/plus.svg"
//                       height="24px"
//                       width="24px"
//                     />
//                     <a href="/top-up/top-up.html" class="text-dark">
//                       <h6 class="ml-2 mb-0">Top Up</h6>
//                     </a>
//                   </li>
//                   <li class="d-flex align-items-center my-4">
//                     <img
//                       alt="profile"
//                       src="/assets/img/icon/user.svg"
//                       height="24px"
//                       width="24px"
//                     />
//                     <a href="/profile/status.html" class="text-dark">
//                       <h6 class="ml-2 mb-0">Profile</h6>
//                     </a>
//                   </li>
//                 </ul>
//                 <ul class="">
//                   <li class="d-flex align-items-center">
//                     <img
//                       alt="logout"
//                       src="/assets/img/icon/log-out.svg"
//                       height="24px"
//                       width="24px"
//                     />
//                     <a onClick={() => onLogout()} class="text-dark">
//                       <h6 class="ml-2 mb-0">Logout</h6>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// const Content = () => {
//   const dispatch = useDispatch();
//   const TopUp = useSelector((s) => s.TopUp);
//   let history = useHistory();
//   const Auth = useSelector((s) => s.Auth);
//   React.useEffect(() => {
//     dispatch(
//       getTopUp({
//         token: Auth.data,
//       })
//     );
//     // console.log(profile[0], "dataaasdk SEARCH");
//   }, []);
//   const onLogout = () => {
//     dispatch(AuthLogout());
//     history.replace("/login");
//   };
//   // console.log(TopUp.data, "TOOPPPUPPPPPPPPASKS");
//   return (
//     <>
//       <nav
//         class="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
//         id="nav-content"
//       >
//         <div>
//           <ul class="col-sm-12">
//             <li class="d-flex align-items-center my-4 ">
//               <img
//                 alt="dashboard"
//                 src="/assets/img/icon/dashboard.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a href="/home/home.html" class="txt-dark">
//                 <h6 class="ml-2 mb-0">Dashboard</h6>
//               </a>
//             </li>
//             <li class="d-flex align-items-center my-4">
//               <img
//                 alt="transfer"
//                 src="/assets/img/icon/arrow-up.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a href="/transfer/transfer.html" class="text-dark">
//                 <h6 class="ml-2 mb-0">Transfer</h6>
//               </a>
//             </li>
//             <li class="d-flex align-items-center my-4 active">
//               <img
//                 alt="plus"
//                 src="/assets/img/icon/plus.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a href="/top-up/top-up.html" class="txt-blue">
//                 <h6 class="ml-2 mb-0">Top Up</h6>
//               </a>
//             </li>
//             <li class="d-flex align-items-center my-4">
//               <img
//                 alt="profile"
//                 src="/assets/img/icon/user.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a href="/profile/status.html" class="text-dark">
//                 <h6 class="ml-2 mb-0">Profile</h6>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul class="col-sm-12 justify-content-end">
//             <li class="d-flex align-items-center">
//               <img
//                 alt="logout"
//                 src="/assets/img/icon/log-out.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a onClick={() => onLogout()} class="text-dark">
//                 <h6 class="ml-2 mb-0">Logout</h6>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <section class="col-lg-10 col-sm-12 px-4">
//         <main class="row">
//           <aside class="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
//             <article class="justify-content-center p-3">
//               <div class="d-flex justify-content-between align-items-center">
//                 <span class="font-weight-bold small">How To Top Up</span>
//               </div>

//               {TopUp.data.map((item, index) => {
//                 return (
//                   <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4">
//                     <span class="font-weight-bold txt-blue align-self-start">
//                       {item.step}
//                     </span>
//                     <span class="small col">{item.article}</span>
//                   </div>
//                 );
//               })}
//             </article>
//           </aside>
//         </main>
//       </section>
//     </>
//   );
// };
// const TopUp = () => {
//   return (
//     <div>
//       {/* <Header /> */}
//       <Nav />
//       <main class="container my-4">
//         <section class="row">
//           <Content />
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default TopUp;
