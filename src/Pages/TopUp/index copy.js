// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Axios from "axios";
// import './assets/css/top-up.css';
// import iconHome from '../../assets/img/icon/icon-home.svg';
// import iconTransfer from '../../assets/img/icon/arrow-up.svg';
// import iconTopUp from '../../assets/img/icon/plus_.svg';
// import iconUser from '../../assets/img/icon/user.svg';
// import iconLogout from '../../assets/img/icon/log-out.svg';

// class TopUp extends Component {
//     state = {
//         values: []
//     }
//     getTopUp() {
//         Axios.get('https://zwalletapi.herokuapp.com/api/top-up').then((res) => {
//             this.setState({ values: res.data.values });
//             console.log(res.data)
//         }).catch((error) => {
//             console.log(error.message)
//         });
//     };
//     componentDidMount() {
//         this.getTopUp();
//     };
//     render() {
//         return (
//             <div>
//                 <main className="container my-4">
//                     <section className="row">
//                         <nav className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
//                             id="nav-content">
//                             <div>
//                                 <ul className="col-sm-12">
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="dashboard" src={iconHome} height="24px" width="24px" />
//                                         <Link to="/home">
//                                             <h6 className="ml-2 mb-0 txt-dark">Dashboard</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="transfer" src={iconTransfer} height="24px" width="24px" />
//                                         <Link to="/transfer">
//                                             <h6 className="ml-2 mb-0 txt-dark">Transfer</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4 active">
//                                         <img alt="plus" src={iconTopUp} height="24px" width="24px" />
//                                         <Link to="/top-up">
//                                             <h6 className="ml-2 mb-0 txt-blue">Top Up</h6>
//                                         </Link>
//                                     </li>
//                                     <li className="d-flex align-items-center my-4">
//                                         <img alt="profile" src={iconUser} height="24px" width="24px" />
//                                         <Link to="/profile">
//                                             <h6 className="ml-2 mb-0 txt-dark">Profile</h6>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <ul className="col-sm-12 justify-content-end">
//                                     <li className="d-flex align-items-center">
//                                         <img alt="logout" src={iconLogout} height="24px" width="24px" />
//                                         <Link to="/Home">
//                                             <h6 className="ml-2 mb-0 txt-dark">Logout</h6>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                         <section className="col-lg-10 col-sm-12 px-4">
//                             <main className="row">
//                                 <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
//                                     <article className="justify-content-center p-3">
//                                         <div className="d-flex justify-content-between align-items-center">
//                                             <span className="font-weight-bold small">How To Top Up</span>
//                                         </div>
//                                         {this.state.values.map((item, index) => {
//                                             return (
//                                                 <div className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4">
//                                                     <span className="font-weight-bold txt-blue align-self-start">{item.step}</span>
//                                                     <span className="small col">{item.article}</span>
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
