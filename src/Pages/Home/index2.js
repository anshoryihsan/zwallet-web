import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../../assets/css/index.css";
import userPhoto from "../../assets/img/user-photo.svg";
import iconHome from "../../assets/img/icon/icon-home_.svg";
import iconTransfer from "../../assets/img/icon/arrow-up.svg";
import iconTopUp from "../../assets/img/icon/plus.svg";
import iconUser from "../../assets/img/icon/user.svg";
import iconLogout from "../../assets/img/icon/log-out.svg";
import iconTransfer_ from "../../assets/img/icon/arrow-up_.svg";
import iconTopUp_ from "../../assets/img/icon/plus_.svg";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

// require('dotenv/config');
const Home = () => {
  return <div>Welcome to the Home Page!</div>;
};

class Home extends React.Component {
  state = {
    values: [],
  };
  getTransaction() {
    Axios.get("https://zwalletapi.herokuapp.com/api/profile")
      .then((res) => {
        this.setState({ values: res.data.values });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  componentDidMount() {
    this.getTransaction();
  }
  render() {
    return (
      <div>
        <main className="container my-4">
          <section className="row">
            <nav
              className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
              id="nav-content"
            >
              <div>
                <ul className="col-sm-12">
                  <li className="d-flex align-items-center my-4 active">
                    <img
                      alt="dashboard"
                      src={iconHome}
                      height="24px"
                      width="24px"
                    />
                    <Link to="/Home">
                      <h6 className="ml-2 mb-0">Dashboard</h6>
                    </Link>
                  </li>
                  <li className="d-flex align-items-center my-4">
                    <img
                      alt="transfer"
                      src={iconTransfer}
                      height="24px"
                      width="24px"
                    />
                    <Link to="/transfer">
                      <h6 className="ml-2 mb-0 text-dark">Transfer</h6>
                    </Link>
                  </li>
                  <li className="d-flex align-items-center my-4">
                    <img
                      alt="plus"
                      src={iconTopUp}
                      height="24px"
                      width="24px"
                    />
                    <Link to="/top-up">
                      <h6 className="ml-2 mb-0 text-dark">Top Up</h6>
                    </Link>
                  </li>
                  <li className="d-flex align-items-center my-4">
                    <img
                      alt="profile"
                      src={iconUser}
                      height="24px"
                      width="24px"
                    />
                    <Link to="/profile">
                      <h6 className="ml-2 mb-0 text-dark">Profile</h6>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="col-sm-12 justify-content-end">
                  <li className="d-flex align-items-center">
                    <img
                      alt="logout"
                      src={iconLogout}
                      height="24px"
                      width="24px"
                    />
                    <Link to="/Home">
                      <h6 className="ml-2 mb-0 text-dark">Logout</h6>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <section className="col-lg-10 col-sm-12 px-4">
              <main className="row">
                <header className="col-lg-12 bg-blue shadow-sm mb-2 header-content">
                  <div className="my-3 d-md-flex justify-content-between align-items-center">
                    <section className="">
                      <span className="txt-white">Balance</span>
                      <div className="h3 txt-white font-weight-bold my-3">
                        Rp 120.000
                      </div>
                      <span className="txt-white small">+62 813-9387-7946</span>
                    </section>
                    <section className="d-lg-flex flex-column">
                      <a href="#">
                        <button className="btn btn-bg-lg py-1 mb-md-3 text-white d-flex align-items-center">
                          <img src={iconTransfer_} height="24px" width="24px" />
                          <div className="font-weight-bold">Transfer</div>
                        </button>
                      </a>
                      <a href="/top-up/top-up.html">
                        <button className="btn btn-bg-lg py-1 mb-md-3 px-3 text-white d-flex align-items-center">
                          <img src={iconTopUp_} height="24px" width="24px" />
                          <div className="font-weight-bold">Top Up</div>
                        </button>
                      </a>
                    </section>
                  </div>
                </header>
                <aside className="col-lg-8 bg-color-white shadow-sm">
                  Ichart
                </aside>

                <aside className="col-lg-4 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
                  <article className="  ">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className=" bd-highlight trh-p">
                        <span className="font-weight-bold small">
                          Transaction History
                        </span>
                      </div>
                      <div className="">
                        <a href="history.html" className="small txt-blue">
                          Seel all
                        </a>
                      </div>
                    </div>
                    {this.state.values.map((item, index) => {
                      return (
                        <div className="d-flex align-items-center justify-content-between my-3">
                          <div className="d-flex align-items-center">
                            <img src={userPhoto} alt="img" />
                            <div className="ml-2 pl-2 flex-row">
                              <span className="p-1 font-weight-bold small">
                                {item.first_name} {item.last_name}
                              </span>
                              <span className="p-1 small">Transfer</span>
                            </div>
                          </div>
                          <span className="text-success small">+ Rp50.000</span>
                        </div>
                      );
                    })}
                  </article>
                </aside>
              </main>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
