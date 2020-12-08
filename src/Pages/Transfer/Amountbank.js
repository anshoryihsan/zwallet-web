import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import "./transfer.css";
import { Header, Footer } from "../../Components";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { IMAGE_URL } from "../../Helper/Environment";
import { useSelector, useDispatch } from "react-redux";
import { AuthLogout } from "../../redux/actions/Auth";

function Amountbank() {
  const { userdatatransaction, userdata, loading } = useSelector(
    (state) => state.User
  );
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  function isActive() {
    if (amount && note) {
      return true;
    }
    return false;
  }
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
            loading={loading}
            setAmount={setAmount}
            setNote={setNote}
            amount={amount}
            note={note}
            history={history}
            isActive={isActive}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

function Content(props) {
  const {
    data,
    balance,
    loading,
    setAmount,
    amount,
    setNote,
    note,
    history,
    isActive,
  } = props;
  // console.log(props, "ini props");
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <section className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold small">Transfer Money</span>
            </section>
            <section className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
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
            </section>

            <section className="w-50 d-none d-lg-block mt-4">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </section>
            <div
              // action="./confirm.html"
              className="mt-5 d-flex flex-column align-items-center"
            >
              <input
                className="d-block font-weight-bold inputamout txt-blue"
                placeholder="0.0"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                type="text"
                maxLength="19"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <div className="font-weight-bold mt-3 mb-5">
                Rp{balance ? balance - amount : "0"} Available
              </div>
              <div className="input-container">
                <label className="d-flex w-100">
                  <input
                    placeholder="Add some notes"
                    type="text"
                    className="inputnote"
                    onChange={(e) => props.setNote(e.target.value)}
                    value={note}
                  />
                </label>
              </div>
              <div className="w-100 d-flex justify-content-end mt-5">
                <button
                  disabled={
                    balance === 0 ||
                    balance < amount ||
                    amount === "" ||
                    note === ""
                  }
                  onClick={() =>
                    props.history.push(
                      `/transfer/confirm?amount=${amount}&note=${note}`
                    )
                  }
                  type="submit"
                  className="btn-continue py-2 px-3"
                >
                  Continue
                </button>
              </div>
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

export default Amountbank;
