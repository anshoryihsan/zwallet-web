import React, { useState } from "react";
import "./style.css";
import "./style.css";
import { login } from "../../utils";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSignup } from "../../redux/actions/Auth";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(
      AuthSignup(
        { first_name: username, email: email, password: password },
        history
      )
    );
  };

  return (
    <main className="container-fluid d-flex">
      <article className="row">
        <section className="col-sm-7 px-5 bg pb-5">
          <div className="mx-5 px-6 pt-4 pb-5">
            <p className="h3 color-p">Zwallet</p>
            <center>
              <img
                className="phone img"
                src="/assets/img/phone.svg"
                alt="image"
              />
            </center>
            <h5 className="color-p">App that Covering Banking Needs.</h5>
            <span className="color-p">
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </span>
          </div>
        </section>

        <section className="col-sm-5 px5">
          <div className="mx-5 px-6 pt-4">
            <h4>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users.
            </h4>
            <p>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="Enter your name"
                      type="text"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      className="txtuser"
                      value={username}
                    />
                  </label>
                  {/* {errors.first_name && (
                    <span className="text-danger small text-center m-0">
                      This field is required
                    </span>
                  )} */}
                </div>
                <div className="input-container mt-5">
                  <label htmlFor="email" className="d-flex w-100">
                    <input
                      placeholder="Enter your email"
                      type="text"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="txtmail"
                      value={email}
                    />
                  </label>
                  {/* {errors.email && (
                    <span className="text-danger small text-center m-0">
                      This field is required
                    </span>
                  )} */}
                </div>

                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="txtpass"
                      value={password}
                    />
                  </label>
                  {/* {errors.password && (
                    <span className="text-danger small text-center m-0">
                      This field is required
                    </span>
                  )} */}
                </div>
                <button
                  className="btn btn-login shadow-sm w-100 py-2 font-weight-bold"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <div className="text-black-50 text-center mt-3">
                Don’t have an account? Let’s
                <Link to="/login" className="txt-blue">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Signup;
