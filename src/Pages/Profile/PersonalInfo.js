import React from 'react';

import {Header, Footer} from '../../Components';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './status.css';
import {AuthLogout} from '../../redux/actions/Auth';

const PersonalInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {userdata} = useSelector((state) => state.User);

  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace('/login');
  };
  return (
    <div>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content data={userdata} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Content = (props) => {
  const {data} = props;
  console.log(data);
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <section className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold small">
                Personal Information
              </span>
            </section>
            <section className="w-50 d-lg-block mt-4 txt-grey mb-5">
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </section>
            <section className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <div className="small">First Name</div>
                  <span className="font-weight-bold text-dark">
                    {!data.first_name ? '' : data.first_name}
                  </span>
                </div>
              </div>
            </section>
            <section className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <div className="small">Last Name</div>
                  <span className="font-weight-bold text-dark">
                    {!data.last_name ? '' : data.last_name}
                  </span>
                </div>
              </div>
            </section>
            <section className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <div className="small">Verified E-mail</div>
                  <span className="font-weight-bold text-dark">
                    {!data.email ? '' : data.email}
                  </span>
                </div>
              </div>
            </section>
            <section className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="pl-3">
                  <div className="small">Phone Number</div>
                  <span className="font-weight-bold text-dark">
                    {!data.phone ? '' : data.phone}
                  </span>
                </div>
              </div>
              <Link
                to="/profile/manage-phone"
                className="pr-3 flex-row justify-content-end small"
              >
                <span className="font-weight-bold txt-blue">Manage</span>
              </Link>
            </section>
          </article>
        </aside>
      </main>
    </section>
  );
};

const Nav = (props) => {
  return (
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
  );
};
export default PersonalInfo;
