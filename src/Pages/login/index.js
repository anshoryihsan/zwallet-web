import React, { useState } from "react";
import "./style.css";
import { login } from "../../utils";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthLogin } from "../../redux/actions/Auth";

const Login = () => {
  // console.log(props, "lembur");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  // const { loading } = useSelector((state) => state.Auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.Auth);
  // console.log(error, 'error');
  const onSubmit = (e) => {
    e.preventDefault(e);
    setLoading(true);
    dispatch(AuthLogin({ email, password }, history));
    setLoading(false);
    // console.log(data);
    // login(data);
    // dispatch(
    //   AuthLogin({
    //     email: email,
    //     password: password,
    //     history: props.history,
    //   })
    // );
  };
  // let location = useLocation();
  // let history = useHistory();
  return (
    <main className="container-fluid d-flex">
      <article className="row">
        {/* <Content /> */}
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
              {/* <form action="/home/home.html"> */}
              {/* <form onSubmit={() => login()}> */}
              <form onSubmit={(e) => onSubmit(e)}>
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
                </div>

                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="Enter your password"
                      type="text"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="txtpass"
                      value={password}
                    />
                  </label>
                </div>
                <div className="d-flex justify-content-end">
                  <a
                    href="#"
                    className="small text-black-50 text-right mt-2 mb-5"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  className="btn btn-login shadow-sm w-100 py-2 font-weight-bold"
                  type="submit"
                  disabled={loading || email === "" || password === ""}
                >
                  Login
                </button>
              </form>

              {error ? (
                <div className="text-danger small text-center mt-3">
                  {error}
                </div>
              ) : null}
              <div className="text-black-50 text-center mt-3">
                Don’t have an account? Let’s
                <Link to="/Signup" className="txt-blue">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Login;
