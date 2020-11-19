import Profile from './Profile';
import ManagePhone from './ManagePhone';
import ChangePassword from './ChangePassword';
import PersonalInfo from './PersonalInfo';

export {Profile, ManagePhone, ChangePassword, PersonalInfo};

// import React from "react";
// import { Header, Footer } from "../../Components";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { getUserToken, uploadPhoto } from "../../redux/actions/Profile";
// import { useDispatch, useSelector } from "react-redux";
// import "./status.css";
// import { AuthLogout } from "../../redux/actions/Auth";
// import { useForm } from "react-hook-form";
// import Auth from "../../redux/reducers/Auth";

// const Nav = () => {
//   const dispatch = useDispatch();
//   let history = useHistory();
//   const Auth = useSelector((s) => s.Auth);
//   const Profile = useSelector((s) => s.Profile);

//   React.useEffect(() => {
//     dispatch(
//       getUserToken({
//         token: Auth.data,
//       })
//     );
//     // console.log(Profile, "Profilelllll");
//   }, []);
//   const onLogout = () => {
//     dispatch(AuthLogout());
//     history.replace("/login");
//   };
//   return (
//     <>
//       <nav
//         className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
//         id="nav-content"
//       >
//         <div>
//           <ul className="col-sm-12">
//             <li className="d-flex align-items-center my-4">
//               <img
//                 alt="dashboard"
//                 src="/assets/img/icon/dashboard.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link to="/home" className="text-dark">
//                 <h6 className="ml-2 mb-0">Dashboard</h6>
//               </Link>
//             </li>
//             <li className="d-flex align-items-center my-4">
//               <img
//                 alt="transfer"
//                 src="/assets/img/icon/arrow-up.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link to="/transfer" className="text-dark">
//                 <h6 className="ml-2 mb-0">Transfer</h6>
//               </Link>
//             </li>
//             <li className="d-flex align-items-center my-4">
//               <img
//                 alt="plus"
//                 src="/assets/img/icon/plus.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link className="text-dark">
//                 <h6 className="ml-2 mb-0">Top Up</h6>
//               </Link>
//               <a href="/top-up/top-up.html"></a>
//             </li>
//             <li className="d-flex align-items-center my-4 active">
//               <img
//                 alt="profile"
//                 src="/assets/img/icon/user.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <Link className="txt-blue">
//                 <h6 className="ml-2 mb-0">Profile</h6>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <ul className="col-sm-12 justify-content-end">
//             <li className="d-flex align-items-center">
//               <img
//                 alt="logout"
//                 src="/assets/img/icon/log-out.svg"
//                 height="24px"
//                 width="24px"
//               />
//               <a onClick={() => onLogout()} className="text-dark">
//                 <h6 className="ml-2 mb-0">Logout</h6>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// const Content = (props) => {
//   const dispatch = useDispatch();
//   const Profile = useSelector((s) => s.Profile);
//   let history = useHistory();
//   const Auth = useSelector((s) => s.Auth);

//   React.useEffect(() => {
//     dispatch(
//       getUserToken({
//         token: Auth.data,
//       })
//     );
//   }, []);
//   const onLogout = () => {
//     dispatch(AuthLogout());
//     history.replace("/login");
//   };
//   console.log(Profile.data[0], "dataaasdk SEARCH");
//   // console.log(Auth, "AUUUUTTHHH");
//   // console.log(Profile.data[0], "PROOOFIIILLE2222122212EEE");
//   return (
//     <section className="col-lg-10 col-sm-12 px-4">
//       <main className="row">
//         <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
//           <article className="justify-content-center p-3">
//             <div
//               action="./confirm.html"
//               className="mt-5 d-flex flex-column align-items-center"
//             >
//               <img
//                 src={!Profile.data ? " " : Profile.data[0].photo}
//                 alt="img"
//               />
//               {/* {Profile.data[0].photo} */}
//               <div
//                 className="font-weight-bold mt-3 mb-2"
//                 data-toggle="modal"
//                 data-target="#myModal"
//               >
//                 <img src="/assets/img/icon/edit-icon.svg" />
//                 <span className="p-0 small text-black-50">edit</span>
//               </div>
//               <div className="font-weight-bold">
//                 {!Profile.data ? " " : Profile.data[0].first_name}{" "}
//                 {!Profile.data ? " " : Profile.data[0].last_name}
//               </div>
//               <div className="font-weight-bold small txt-grey mt-1 mb-5">
//                 <span className="p-0 small text-black-50">
//                   {!Profile.data ? " " : Profile.data[0].phone}
//                 </span>
//               </div>
//             </div>
//             <div className="mt-2 d-flex flex-column align-items-center">
//               <Link
//                 to="/profile/personal-info"
//                 className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
//               >
//                 <span
//                   className="p-3 font-weight-bold txt-dark"
//                   onClick={() =>
//                     props.history.push({
//                       pathname: "/profile/profile-info",
//                       token: Auth.data,
//                       data: Profile.data[0],
//                     })
//                   }
//                 >
//                   Personal Information
//                 </span>
//                 <div className="ml-4 pl-4 flex-row justify-content-end small">
//                   <img
//                     alt="logout"
//                     src="/assets/img/icon/arrow-left.svg"
//                     height="24px"
//                     width="24px"
//                   />
//                 </div>
//               </Link>
//             </div>
//             <div className="mt-2 d-flex flex-column align-items-center ">
//               <Link
//                 to="/manage-password"
//                 className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
//               >
//                 <span className="p-3 font-weight-bold txt-dark">
//                   Change Password
//                 </span>
//                 <div className="ml-4 pl-4 flex-row justify-content-end small">
//                   <img
//                     alt="logout"
//                     src="/assets/img/icon/arrow-left.svg"
//                     height="24px"
//                     width="24px"
//                   />
//                 </div>
//               </Link>
//             </div>
//             <div className="mt-2 d-flex flex-column align-items-center ">
//               <Link
//                 // to="./pin.html"
//                 className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
//               >
//                 <span className="p-3 font-weight-bold txt-dark">
//                   Change PIN
//                 </span>
//                 <div className="ml-4 pl-4 flex-row justify-content-end small">
//                   <img
//                     alt="logout"
//                     src="/assets/img/icon/arrow-left.svg"
//                     height="24px"
//                     width="24px"
//                   />
//                 </div>
//               </Link>
//             </div>
//             <div className="mt-2 d-flex flex-column align-items-center ">
//               <div className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm">
//                 <span
//                   onClick={() => onLogout()}
//                   className="p-3 font-weight-bold"
//                 >
//                   Logout
//                 </span>
//               </div>
//             </div>
//           </article>
//         </aside>
//       </main>
//     </section>
//   );
// };
// const Modal = () => {
//   const { register, handleSubmit } = useForm();
//   const dispatch = useDispatch();
//   const Profile = useSelector((s) => s.Profile);
//   const Auth = useSelector((s) => s.Auth);
//   const onSubmit = (data) => {
//     console.log(data.image, "IMAGGGEEEEEEEEEEEE");
//     // login(data);
//     // dispatch(
//     //   uploadPhoto({
//     //     image: data.image[0].name,
//     //     token: Auth.data,
//     //   })
//     // );
//   };
//   return (
//     <div className="modal fade" id="myModal" role="dialog">
//       <div className="modal-dialog modal-sm">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title">Edit Your Photo</h5>
//             <button type="button" className="close" data-dismiss="modal">
//               &times;
//             </button>
//           </div>
//           <div className="modal-body d-flex align-items-center justify-content-between">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               enctype="multipart/form-data"
//             >
//               <input type="file" name="image" ref={register} accept="image" />
//               <div className="d-flex align-items-center  mt-5 shadow-sm">
//                 <input
//                   type="submit"
//                   className="btn btn-modal"
//                   value="Upload Photo"
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Profile = (props) => {
//   return (
//     <div>
//       {/* <Header /> */}
//       <main className="container my-4">
//         <section className="row">
//           <Nav />
//           <Content {...props} />
//         </section>
//         <Modal />
//       </main>
//       <Footer />
//     </div>
//   );
// };
// export default Profile;
