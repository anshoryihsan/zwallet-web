import React, {Component} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {AuthLogout} from '../redux/actions/Auth';

const Nav = () => {
  let location = useLocation();
  let history = useHistory();
  // console.log(props, "osososos");
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace('/login');
  };
  return <Navigation onLogout={onLogout} />;
  // return <NaviResponsive onLogout={onLogout} />;
};

const Navigation = (props) => {
  // console.log(props, "asprops");
  return (
    <nav
      className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
      id="nav-content"
    >
      <div>
        <ul className="col-sm-12">
          <li className="d-flex align-items-center my-4 active">
            <img
              alt="dashboard"
              src="/assets/img/icon/dashboard-icon-active.svg"
              height="24px"
              width="24px"
            />
            <Link to="/home" className="txt-blue">
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
          </li>
          <li className="d-flex align-items-center my-4">
            <img
              alt="profile"
              src="/assets/img/icon/user.svg"
              height="24px"
              width="24px"
            />
            <Link to="/profile" className="text-dark">
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

const NaviResponsive = (props) => {
  // console.log(props, "asprops");
  return (
    <nav
      className="col-lg-2 d-lg-flex shadow-sm bg-white justify-content-between flex-column nav-content"
      id="nav-content"
    >
      <div>
        <ul className="col-sm-12">
          <li className="d-flex align-items-center my-4 active">
            <img
              alt="dashboard"
              src="/assets/img/icon/dashboard-icon-active.svg"
              height="24px"
              width="24px"
            />
            <Link to="/home" className="txt-blue">
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
          <li className="d-flex align-items-center my-4">
            <img
              alt="profile"
              src="/assets/img/icon/user.svg"
              height="24px"
              width="24px"
            />
            <Link className="text-dark">
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

export default Nav;
