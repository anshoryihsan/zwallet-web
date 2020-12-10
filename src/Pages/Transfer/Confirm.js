import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./transfer.css";
import { Header, Footer } from "../../Components";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { IMAGE_URL } from "../../Helper/Environment";
import { useSelector, useDispatch } from "react-redux";
import { AuthLogout } from "../../redux/actions/Auth";
import { Transfer } from "../../redux/actions/Transfer";
import { DateTime } from "luxon";
import PinInput from "react-pin-input";

function Confirm() {
  const params = new URLSearchParams(window.location.search);
  const amount = params.get("amount");
  const note = params.get("note");
  const [_pin, _setPin] = useState("");
  const { token } = useSelector((state) => state.Auth);
  const date = DateTime.local().toLocaleString();
  const { userdatatransaction, userdata, loading } = useSelector(
    (state) => state.User
  );

  const history = useHistory();
  const dispatch = useDispatch();
  const onContinue = () => {
    if (_pin != userdata.pin) {
      alert("Error Sorry, this PIN isn't working");
    } else {
      dispatch(
        Transfer(
          token,
          {
            receiver_id: userdatatransaction.id,
            amount: amount,
            note: note,
          },
          history
        )
      );
    }
  };

  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  return (
    <>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content
            data={userdatatransaction}
            balance={userdata.balance}
            amount={amount}
            date={date}
            note={note}
            loading={loading}
            // history={history}
          />
        </section>
      </main>
      <Footer />
      <Modal _pin={_pin} _setPin={_setPin} onContinue={onContinue} />
    </>
  );
}

function Content(props) {
  const { data, balance, amount, date, loading, note, history } = props;
  // console.log(props, "ini props");
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
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
                  {loading ? (
                    <TextBlock
                      rows={1}
                      style={{ width: 170, marginBottom: 10, height: 25 }}
                      color="#f0f0f0"
                    />
                  ) : (
                    <>
                      <a
                        href="/transfer.html"
                        className="font-weight-bold text-dark"
                      >
                        {data.first_name}
                      </a>
                      <div className="small">+62 813-8492-9994</div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
              <span className="font-weight-bold small">Detail</span>
            </div>
            <form action="./confirm.html" className="" role="form" method="">
              <div className="bradius d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
                <div className="d-flex align-items-center">
                  <div className="pl-3">
                    <a
                      href="./amountbank.html"
                      className="font-weight-bold text-dark"
                    >
                      Amount
                    </a>
                    <div className="small">Rp{amount ? amount : 0}</div>
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
                    <div className="small">Rp{balance - amount}</div>
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
                    <div className="small">{date ? date : "-"}</div>
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
                    <div className="small">{note ? note : 0}</div>
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex justify-content-end mt-5">
                <button
                  type="button"
                  className="btn-continue py-2 px-3"
                  data-toggle="modal"
                  data-target="#mymodal"
                >
                  Continue
                </button>
              </div>
            </form>
          </article>
        </aside>
      </main>
    </section>
  );
}

function Modal(props) {
  const { _pin, _setPin, onContinue } = props;
  return (
    <div
      className="modal fade"
      id="mymodal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="exampleModalLongTitle">
              Enter PIN to Transfer
            </h6>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body ">
            <div className="d-flex flex-column align-items-center">
              <span className="small">
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </span>
              {/* <form action="status.html"> */}
              <div className="no-gutters d-flex align-items-center justify-content-between  my-2">
                <PinInput
                  length={6}
                  autoSelect={true}
                  secret
                  initialValue=""
                  type="numeric"
                  inputMode="number"
                  regexCriteria={/^[ 0-9_@./#&+-]*$/}
                  onChange={(value) => {
                    _setPin(value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn-continue py-2 px-3"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onContinue}
              disabled={_pin == ""}
            >
              Continue
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
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
            <a href="/top-up/top-up.html"></a>
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

export default Confirm;
