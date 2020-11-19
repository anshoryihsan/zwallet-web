// import React, { Component } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
// import Axios from "axios";
// import jes from '../../../src/assets/img/jessica-img.svg';
// import './assets/css/transfer.css';
// import iconHome from '../../assets/img/icon/icon-home.svg';
// import iconTransfer from '../../assets/img/icon/arrow-up-active.svg';
// import iconTopUp from '../../assets/img/icon/plus.svg';
// import iconUser from '../../assets/img/icon/user.svg';
// import iconLogout from '../../assets/img/icon/log-out.svg';

// class TopUp extends Component {
//     state = {
//         values: []
//     }
//     // thi.state.topup && this.state.topup
//     getTopUp() {
//         Axios.get('https://zwalletapi.herokuapp.com/api/transfer').then((res) => {
//             this.setState({ values: res.data.values });
//             console.log(res.data)
//         }).catch((error) => {
//             console.log(error.message)
//         });
//     };
//     // searchName(event) {
//     //     this.setState({ values: event.data.values.substr(0, 20) });
//     // }

//     componentDidMount() {
//         this.getTopUp();
//     };

//     render() {
//         return (
//             <div>
//                 <main class="container my-4">
//                     <section class="row">
//                         <nav class="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
//                             id="nav-content">
//                             <div>
//                                 <ul className="col-sm-12">
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="dashboard" src={iconHome} height="24px" width="24px" />
//                                         <Link to="/home">
//                                             <h6 className="ml-2 mb-0 txt-dark">Dashboard</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4 active">
//                                         <img alt="transfer" src={iconTransfer} height="24px" width="24px" />
//                                         <Link to="/transfer">
//                                             <h6 className="ml-2 mb-0 txt-blue">Transfer</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="plus" src={iconTopUp} height="24px" width="24px" />
//                                         <Link to="/top-up">
//                                             <h6 className="ml-2 mb-0 txt-dark">Top Up</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="profile" src={iconUser} height="24px" width="24px" />
//                                         <Link to="/Home">
//                                             <h6 className="ml-2 mb-0 txt-dark">Profile</h6>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <ul class="col-sm-12 justify-content-end">
//                                     <li class="d-flex align-items-center">
//                                         <img alt="logout" src={iconLogout} height="24px" width="24px" />
//                                         <a href="/login.html" class="text-dark">
//                                             <h6 class="ml-2 mb-0">Logout</h6>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                         <section class="col-lg-10 col-sm-12 px-4">
//                             <main class="row">
//                                 <aside class="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
//                                     <article class="justify-content-center p-3">
//                                         <div class="d-flex justify-content-between align-items-center">
//                                             <span class="font-weight-bold small">Search Receiver</span>
//                                         </div>
//                                         <div class="input-txt my-2 shadow-sm">
//                                             <label class="d-flex align-items-center w-100">
//                                                 <input placeholder="Search receiver here" type="text" class="inputtxt" />
//                                             </label>
//                                         </div>
//                                         {this.state.values.map((item, index) => {
//                                             return (
//                                                 <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
//                                                     <div class="d-flex align-items-center ">
//                                                         <img src={jes} height="56px" width="56px" />
//                                                         <div class="pl-3">
//                                                             <Link to='/amount' class='font-weight-bold text-dark'>
//                                                                 {item.to_}
//                                                             </Link>
//                                                             <div class="small">{item.phone}</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             )
//                                         })}
//                                     </article>
//                                 </aside>
//                             </main>
//                         </section>
//                     </section>
//                 </main>
//             </div>
//         )
//     }
// }

// export default TopUp;
