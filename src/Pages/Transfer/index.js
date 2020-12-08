import Transfer from "./Transfer";
import Amountbank from "./Amountbank";
import Confirm from "./Confirm";
import Status from "./Status";
export { Transfer, Amountbank, Confirm, Status };

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { AuthLogout } from "../../redux/actions/Auth";
// import { getUserToken, getUserName } from "../../redux/actions/Profile";
// import {
//   TransferHistory,
//   TransferHistorySearch,
// } from "../../redux/actions/Transfer";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import "./transfer.css";
// import { Header, Footer } from "../../Components";
// import { Loading } from "./Components";

// const Content = (props) => {
//   let history = useHistory();
//   const [query, setQuery] = React.useState("");
//   const dispatch = useDispatch();

//   const Profile = useSelector((s) => s.Profile);
//   const Auth = useSelector((s) => s.Auth);
//   const Transfer = useSelector((s) => s.Transfer);

//   // console.log(Auth.data, "AUUUUTTTTTTTTAAADDDTTTAAAAA");
//   React.useEffect(() => {
//     dispatch(
//       TransferHistorySearch({
//         search: query,
//         token: Auth.data,
//       })
//     );
//     // console.log(Transfer.data, "sakjskjd DATAA");
//   }, []);

//   const onLogout = (props) => {
//     dispatch(AuthLogout());
//     history.replace("/login");
//   };
//   return (
//     <>
//       <nav
//         class="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
//         id="nav-content"
//       >
//         <div>
//           <ul class="col-sm-12">
//             <li class="d-flex align-items-center my-4">
//               <img
//                 alt="dashboard"
//                 src="/assets/img/icon/dashboard.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link to="/home" class="txt-dark">
//                 <h6 class="ml-2 mb-0">Dashboard</h6>
//               </Link>
//             </li>
//             <li class="d-flex align-items-center my-4 active">
//               <img
//                 alt="transfer"
//                 src="/assets/img/icon/arrow-up_.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link to="/transfer" class="txt-blue">
//                 <h6 class="ml-2 mb-0">Transfer</h6>
//               </Link>
//             </li>
//             <li class="d-flex align-items-center my-4">
//               <img
//                 alt="plus"
//                 src="/assets/img/icon/plus.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link class="text-dark">
//                 <h6 class="ml-2 mb-0">Top Up</h6>
//               </Link>
//               <a href="/top-up/top-up.html"></a>
//             </li>
//             <li class="d-flex align-items-center my-4">
//               <img
//                 alt="profile"
//                 src="/assets/img/icon/user.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link class="text-dark">
//                 <h6 class="ml-2 mb-0">Profile</h6>
//               </Link>
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
//               <a></a>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <section class="col-lg-10 col-sm-12 px-4">
//         <main class="row">
//           <aside class="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
//             <article class="justify-content-center p-3">
//               <div class="d-flex justify-content-between align-items-center">
//                 <span class="font-weight-bold small">Search Receiver</span>
//               </div>

//               <div class="input-txt my-2">
//                 <label class="d-flex w-100 align-items-center">
//                   <input
//                     placeholder="Search receiver here"
//                     onChange={(e) => setQuery(e.target.value)}
//                     type="text"
//                     class="inputtxt"
//                   />
//                 </label>
//               </div>

//               {Transfer.data.map((item, index) => {
//                 return (
//                   <div
//                     onClick={() =>
//                       props.history.push({
//                         pathname: "/transfer/amount",
//                         receiver: {
//                           first_name: item.from_,
//                           phone: item.phone,
//                           // id: query ? item.profile_id : item.id,
//                         },
//                       })
//                     }
//                     class="d-flex  rounded-14 align-items-center justify-content-between shadow-sm pl-3 mt-2 py-3"
//                   >
//                     <div class="d-flex align-items-center">
//                       <img
//                         src="../assets/images/1.png"
//                         height="56px"
//                         width="56px"
//                       />
//                       <div class="pl-3">
//                         <span
//                           href="./amountbank.html"
//                           class="font-weight-bold text-dark"
//                         >
//                           {item.from_}
//                         </span>
//                         <div class="small">{item.phone}</div>
//                       </div>
//                     </div>
//                   </div>
//                 ); //end return
//               })}
//             </article>
//           </aside>
//         </main>
//       </section>
//     </>
//   );
// };
// const Transfer = (props) => {
//   let location = useLocation();
//   let history = useHistory();

//   return (
//     <div>
//       <Header />
//       <main class="container my-4">
//         <section class="row">
//           <Content {...props} />
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default Transfer;
