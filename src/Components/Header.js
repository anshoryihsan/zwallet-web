// import './index.css';
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { getUserToken } from "../redux/actions/Profile";
import { IMAGE_URL } from "../Helper/Environment";

const Header = (props) => {
  const { data } = props;
  const { first_name, phone, photo } = data;
  // console.log(first_name, 'header');
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm nav-bar hide">
      <div className="container d-flex justify-content-between align-items-center ">
        <span className="h4 font-weight-bold txt-blue">Zwallet</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          {data ? (
            <div className="navbar-nav d-lg-flex flex-lg-row align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="mobile-l"
                  src={!photo ? "/assets/img/icon/user.svg" : IMAGE_URL + photo}
                  alt="user"
                  height="50px"
                  width="50px"
                />
              </div>
              <div className="d-flex flex-column align-items-center mx-3">
                <span className="p-0 font-weight-bold">
                  {!first_name ? (
                    <TextBlock
                      rows={1}
                      style={{ width: 170, marginBottom: 10, height: 25 }}
                      color="#f0f0f0"
                    />
                  ) : (
                    first_name
                  )}
                </span>
                <span className="p-0 small text-black-50">
                  {!phone ? (
                    <TextBlock
                      rows={1}
                      style={{ width: 170, marginBottom: 10, height: 25 }}
                      color="#f0f0f0"
                    />
                  ) : (
                    phone
                  )}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="mobile-l bel"
                  src="/assets/img/icon/bell-icon.svg"
                  alt="notif"
                />
              </div>
            </div>
          ) : (
            <TextBlock
              rows={1}
              style={{ width: 170, marginBottom: 10, height: 25 }}
              color="#f0f0f0"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
