import React from "react";
import "./status.css";
import { Header, Footer } from "../../Components";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AuthLogout } from "../../redux/actions/Auth";
import { UpdateUserProfile } from "../../redux/actions/User";

function ChangePassword() {
  const [password, setPassword] = React.useState("");
  const [newPass, setNewPass] = React.useState("");
  const [newRepeatPass, setNewRepeatPass] = React.useState("");
  const [Error, setError] = React.useState(true);
  //   const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { userdata } = useSelector((state) => state.User);
  const { token } = useSelector((state) => state.Auth);

  const onSubmit = (e) => {
    console.log(password, "pass");
    console.log(newPass, "newpass");
    console.log(newRepeatPass, "rpass");
    e.preventDefault(e);
    if (newPass === newRepeatPass) {
      dispatch(UpdateUserProfile(token, { password: newPass }, history));
      setError(true);
    } else {
      setError(false);
    }
  };

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
            onSubmit={onSubmit}
            password={password}
            setPassword={setPassword}
            newPass={newPass}
            setNewPass={setNewPass}
            newRepeatPass={newRepeatPass}
            setNewRepeatPass={setNewRepeatPass}
            Error={Error}
            setError={setError}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Content = (props) => {
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <section className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold small">Change Password</span>
            </section>
            <section className="w-50 d-lg-block mt-4 txt-grey mb-5">
              You must enter your current password and then type your new
              password twice.
            </section>

            <div className="mt-2 d-flex flex-column align-items-center">
              <form onSubmit={(e) => props.onSubmit(e)}>
                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="Current password"
                      type="password"
                      className="txtpass_ txt-grey"
                      onChange={(e) => props.setPassword(e.target.value)}
                      value={props.password}
                      required
                    />
                  </label>
                </div>
                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="New password"
                      type="password"
                      className="txtpass_ txt-grey"
                      onChange={(e) => props.setNewPass(e.target.value)}
                      value={props.newPass}
                      required
                    />
                  </label>
                </div>
                <div className="input-container mt-5">
                  <label className="d-flex w-100">
                    <input
                      placeholder="Repeat new password"
                      type="password"
                      className="txtpass_ txt-grey"
                      onChange={(e) => props.setNewRepeatPass(e.target.value)}
                      value={props.newRepeatPass}
                      required
                    />
                  </label>
                </div>
                <div>
                  {!props.Error ? (
                    <span className="text-danger small text-center mt-3">
                      New Password not same
                    </span>
                  ) : null}
                </div>

                <button
                  className="btn_ shadow-sm py-2 font-weight-bold mt-5 bg-color-grey small txt-grey mb-5"
                  type="submit"
                >
                  Add New Password
                </button>
              </form>
            </div>
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

export default ChangePassword;
