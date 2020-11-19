import React from "react";
import "./status.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogout } from "../../redux/actions/Auth";
import { Header, Footer } from "../../Components";
import { getUserToken } from "../../redux/actions/Profile";
import Auth from "../../redux/reducers/Auth";

const Nav = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  React.useEffect(() => {
    dispatch(
      getUserToken({
        token: Auth.data,
      })
    );
    // console.log(profile[0], "dataaasdk SEARCH");
  }, []);
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  return (
    <>
      <nav
        className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
        id="nav-content"
      >
        <div>
          <ul className="col-sm-12">
            <li className="d-flex align-items-center my-4">
              <img
                alt="dashboard"
                src="/assets/img/icon/dashboard.svg"
                height="24px"
                width="24px"
              />
              <Link to="/home" className="text-dark">
                <h6 className="ml-2 mb-0">Dashboard</h6>
              </Link>
            </li>
            <li className="d-flex align-items-center my-4">
              <img
                alt="transfer"
                src="/assets/img/icon/arrow-up.svg"
                height="24px"
                width="24px"
              />
              <Link to="/transfer" className="text-dark">
                <h6 className="ml-2 mb-0">Transfer</h6>
              </Link>
            </li>
            <li className="d-flex align-items-center my-4">
              <img
                alt="plus"
                src="/assets/img/icon/plus.svg"
                height="24px"
                width="24px"
              />
              <Link className="text-dark">
                <h6 className="ml-2 mb-0">Top Up</h6>
              </Link>
              <a href="/top-up/top-up.html"></a>
            </li>
            <li className="d-flex align-items-center my-4 active">
              <img
                alt="profile"
                src="/assets/img/icon/user.svg"
                height="24px"
                width="24px"
              />
              <Link className="txt-blue">
                <h6 className="ml-2 mb-0">Profile</h6>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="col-sm-12 justify-content-end">
            <li className="d-flex align-items-center">
              <img
                alt="logout"
                src="/assets/img/icon/log-out.svg"
                height="24px"
                width="24px"
              />
              <a onClick={() => onLogout()} className="text-dark">
                <h6 className="ml-2 mb-0">Logout</h6>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Content = () => {
  return (
    <>
      <h2>pass page</h2>
    </>
  );
};

const Password = () => {
  return (
    <div>
      {/* <Header /> */}
      <main className="container my-4">
        <section className="row">
          <Nav />
          <Content />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Password;
