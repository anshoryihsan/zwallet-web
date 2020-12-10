import React, { useState, useEffect } from "react";
import "./status.css";
import { Header, Footer } from "../../Components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthLogout } from "../../redux/actions/Auth";
import { DeleteUserPhone } from "../../redux/actions/User";

function Managephone() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { userdata } = useSelector((state) => state.User);
  const { token } = useSelector((state) => state.Auth);

  // useEffect(
  //   function deleteClick() {
  //     setLoading(true);
  //     dispatch(UpdateUserData(token, {phone: ' '}));
  //     setLoading(false);
  //   },
  //   [dispatch, token]
  // );

  // useEffect(() => {
  //   dispatch(UserData(token));
  // }, [dispatch, token]);

  const deleteClick = () => {
    setLoading(true);
    dispatch(DeleteUserPhone(token, { phone: " " }, history));
    setLoading(false);
  };

  // const deleteClick = () => {};

  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  return (
    <div>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content
            data={userdata}
            deleteClick={deleteClick}
            loading={loading}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Content = (props) => {
  const { data } = props;

  return (
    <section class="col-lg-10 col-sm-12 px-4">
      <main class="row">
        <aside class="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article class="justify-content-center p-3">
            <section class="d-flex justify-content-between align-items-center">
              <span class="font-weight-bold ">Manage Phone Number</span>
            </section>
            <section class="w-50 d-lg-block mt-4 txt-grey mb-5 small">
              You can only delete the phone number and then you must add another
              phone number.
            </section>
            <section class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div class="d-flex align-items-center justify-content-between">
                <div class="pl-3">
                  <div class="small">Phone Number</div>
                  {props.loading ? (
                    <span class="font-weight-bold text-dark">loading...</span>
                  ) : (
                    <span class="font-weight-bold text-dark">
                      {!data.phone ? " " : data.phone}
                    </span>
                  )}
                </div>
              </div>
              <div
                class="pr-3 flex-row justify-content-end small"
                onClick={() => props.deleteClick()}
              >
                <img
                  alt="delete"
                  src="/assets/img/icon/trash.svg"
                  height="24px"
                  width="24px"
                />
              </div>
            </section>
          </article>
        </aside>
      </main>
    </section>
  );
};

const Nav = (props) => {
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
              <Link to="/top-up" className="text-dark">
                <h6 className="ml-2 mb-0">Top Up</h6>
              </Link>
              <a href="/top-up/top-up.html"></a>
            </li>
            <li className="d-flex align-items-center my-4 active">
              <img
                alt="profile"
                src="/assets/img/icon/user_.svg"
                height="24px"
                width="24px"
              />
              <Link to="/profile" className="txt-blue">
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
              <a onClick={() => props.onLogout()} className="text-dark">
                <h6 className="ml-2 mb-0">Logout</h6>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Managephone;
