import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import "./transfer.css";
import { Header, Footer } from "../../Components";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { IMAGE_URL } from "../../Helper/Environment";
import { useSelector, useDispatch } from "react-redux";
import { AuthLogout } from "../../redux/actions/Auth";
import { UserTransactionHistory } from "../../redux/actions/User";
import { DateTime } from "luxon";

function Amountbank() {
  const { token } = useSelector((state) => state.Auth);
  const { userdatatransaction, userdata } = useSelector((state) => state.User);
  const { statustransfer, loading } = useSelector((state) => state.Transfer);

  const history = useHistory();
  const dispatch = useDispatch();
  const date = DateTime.local().toLocaleString();

  useEffect(() => {
    dispatch(UserTransactionHistory(token));
  }, []);

  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  const onClick = () => {
    history.push("/home");
    // dispatch(UserTransactionHistory(token));
  };
  return (
    <>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content
            data={userdatatransaction}
            loading={loading}
            statustransfer={statustransfer}
            history={history}
            date={date}
            onClick={onClick}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

function Content(props) {
  const { data, onClick, statustransfer, history, date } = props;
  // console.log(props, "ini props");
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <div
              action="./confirm.html"
              className="mt-5 d-flex flex-column align-items-center"
            >
              <img src="/assets/img/icon/success.svg" alt="" />
              <div className="font-weight-bold mt-3 mb-5">Transfer Success</div>
            </div>

            <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <a
                    href="./amountbank.html"
                    className="font-weight-bold text-dark"
                  >
                    Amount
                  </a>
                  <div className="small">
                    Rp
                    {statustransfer.data.amount
                      ? statustransfer.data.amount
                      : 0}
                  </div>
                </div>
              </div>
            </div>
            <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <a
                    href="./amountbank.html"
                    className="font-weight-bold text-dark"
                  >
                    Balance Left
                  </a>
                  <div className="small">
                    Rp{data.balance ? data.balance : 0}
                  </div>
                </div>
              </div>
            </div>
            <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <a
                    href="./amountbank.html"
                    className="font-weight-bold text-dark"
                  >
                    Date & Time
                  </a>
                  <div className="small">{date}</div>
                </div>
              </div>
            </div>
            <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <div className="pl-3">
                  <a
                    href="./amountbank.html"
                    className="font-weight-bold text-dark"
                  >
                    Notes
                  </a>
                  <div className="small">
                    {statustransfer.data.note ? statustransfer.data.note : "-"}
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold small">Transfer To</span>
            </div>
            <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
              <div className="d-flex align-items-center">
                <img
                  src={
                    !data.photo
                      ? "/assets/img/icon/user.svg"
                      : IMAGE_URL + data.photo
                  }
                  height="56px"
                  width="56px"
                />
                <div className="pl-3">
                  <a
                    href="./amountbank.html"
                    className="font-weight-bold text-dark"
                  >
                    {data.first_name ? data.first_name : "-"}
                  </a>
                  <div className="small"> {data.phone ? data.phone : "-"}</div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4 ">
              <button
                className="py-2 px-2 rounded-14 btn bg-grey mr-3"
                // data-toggle="modal"
                // data-target="#staticBackdrop"
              >
                <img
                  src="/assets/img/icon/icon-share.svg"
                  height="22px"
                  width="22px"
                />
              </button>

              <button className="py-2 px-lg-4 px-2 align-items-center rounded-14 btn d-flex mr-3">
                <img
                  src="/assets/img/icon/download.svg"
                  height="22px"
                  width="22px"
                />

                <div className="text-primary ml-2">Download PDF</div>
              </button>

              <button
                onClick={onClick}
                type="button"
                className="btn-continue small"
              >
                Back to Home
              </button>
            </div>
          </article>
        </aside>
      </main>
    </section>
  );
}

function Nav(props) {
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
            <Link to="/home" className="txt-dark">
              <h6 className="ml-2 mb-0">Dashboard</h6>
            </Link>
          </li>
          <li className="d-flex align-items-center my-4 active">
            <img
              alt="transfer"
              src="/assets/img/icon/arrow-up_.svg"
              height="24px"
              width="24px"
            />
            <Link to="/transfer" className="txt-blue">
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
}

export default Amountbank;
