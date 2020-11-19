import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import jes from '../../../assets/img/jessica-img.svg';
// import jes from '../../../../assets/img/jessica-img.svg';
import '../assets/css/transfer.css';
import iconHome from '../../../assets/img/icon/icon-home.svg';
import iconTransfer from '../../../assets/img/icon/arrow-up-active.svg';
import iconTopUp from '../../../assets/img/icon/plus.svg';
import iconUser from '../../../assets/img/icon/user.svg';
import iconLogout from '../../../assets/img/icon/log-out.svg';



class TopUp extends Component {
    state = {
        values: []
    }
    getTopUp() {
        Axios.get('https://zwalletapi.herokuapp.com/transfer').then((res) => {
            this.setState({ values: res.data.values });
            console.log(res.data)
        }).catch((error) => {
            console.log(error.message)
        });
    };
    // searchName(event) {
    //     this.setState({ values: event.data.values.substr(0, 20) });
    // }
    componentDidMount() {
        this.getTopUp();
    };
    render() {
        return (
            <div>
                asdasdadkj
                <main classNam="container my-4">
                    <section classNam="row">
                        <nav classNam="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
                            id="nav-content">
                            <div>
                                <ul className="col-sm-12">
                                    <li className="d-flex align-items-center my-4">
                                        <img alt="dashboard" src={iconHome} height="24px" width="24px" />
                                        <Link to="/home">
                                            <h6 className="ml-2 mb-0 txt-dark">Dashboard</h6>
                                        </Link>
                                    </li>
                                    <li className="d-flex align-items-center my-4 active">
                                        <img alt="transfer" src={iconTransfer} height="24px" width="24px" />
                                        <Link to="/transfer">
                                            <h6 className="ml-2 mb-0 txt-blue">Transfer</h6>
                                        </Link>
                                    </li>
                                    <li className="d-flex align-items-center my-4">
                                        <img alt="plus" src={iconTopUp} height="24px" width="24px" />
                                        <Link to="/top-up">
                                            <h6 className="ml-2 mb-0 txt-dark">Top Up</h6>
                                        </Link>
                                    </li>
                                    <li className="d-flex align-items-center my-4">
                                        <img alt="profile" src={iconUser} height="24px" width="24px" />
                                        <Link to="/Home">
                                            <h6 className="ml-2 mb-0 txt-dark">Profile</h6>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul classNam="col-sm-12 justify-content-end">
                                    <li classNam="d-flex align-items-center">
                                        <img alt="logout" src={iconLogout} height="24px" width="24px" />
                                        <a href="/login.html" classNam="text-dark">
                                            <h6 classNam="ml-2 mb-0">Logout</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <section classNam="col-lg-12 px-4">
                            <main classNam="row">
                                <aside classNam="col-lg-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
                                    <article classNam="justify-content-center p-3">
                                        <div classNam="d-flex justify-content-between align-items-center">
                                            <span classNam="font-weight-bold small">Search Receiver</span>
                                        </div>
                                        <section classNam="w-50 d-none d-lg-block mt-4">
                                            Type the amount you want to transfer and then press continue to the next steps.
                                        </section>
                                        <form action="/transfer-confirmation.html" classNam="mt-5 d-flex flex-column align-items-center">
                                            <input classNam="d-block font-weight-bold input-only-placeholder" placeholder="0.00" type="text" maxlength="19"
                                                id="currency" />

                                            <div classNam="font-weight-bold mt-3 mb-5">Rp120.000 Available</div>

                                            <div classNam="input-container w-50">
                                                <label for="email" classNam="d-flex w-100">
                                                    <span classNam="i-edit"></span>
                                                    <input id="email" placeholder="Add some notes" type="text" classNam="input-line" />
                                                </label>
                                            </div>

                                            <div classNam="w-100 d-flex justify-content-end mt-5">
                                                <button type="submit" classNam="btn btn-primary py-2 px-4 rounded-14">
                                                    Continue
                                                </button>
                                            </div>
                                        </form>


                                    </article>
                                </aside>
                            </main>
                        </section>
                    </section>
                </main>
            </div>
        )
    }
}

export default TopUp;
