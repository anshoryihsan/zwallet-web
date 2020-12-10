import React, { useEffect } from "react";
import "./topup.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AuthLogout } from "../../redux/actions/Auth";
import { howTopUp } from "../../redux/actions/TopUp";
import { Header, Footer } from "../../Components";

function TopUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  //   let location = useLocation();
  const { userdata } = useSelector((state) => state.User);
  const { token } = useSelector((state) => state.Auth);
  const { howtopup } = useSelector((state) => state.TopUp);

  // console.log(getalluserdata);

  useEffect(() => {
    dispatch(howTopUp(token));
  }, [dispatch]);
  //   console.log(userdata, 'transfer');
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  // console.log(name, 'name');
  return (
    <div>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content data={howtopup} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Content(props) {
  const { data } = props;
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <div className="d-flex justify-content-between align-items-center">
              <span class="font-weight-bold small">How To Top Up</span>
            </div>
            {data.map((item, index) => {
              return (
                <div class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 my-3 p-4">
                  <span class="font-weight-bold txt-blue align-self-start">
                    {index + 1}
                  </span>
                  <span class="small col">{item.article}</span>
                </div>
              );
            })}
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
          <li className="d-flex align-items-center my-4">
            <img
              alt="transfer"
              src="/assets/img/icon/arrow-up.svg"
              height="24px"
              width="24px"
            />
            <Link to="/transfer" className="txt-dark">
              <h6 className="ml-2 mb-0">Transfer</h6>
            </Link>
          </li>
          <li className="d-flex align-items-center my-4 active">
            <img
              alt="plus"
              src="/assets/img/icon/plus_.svg"
              height="24px"
              width="24px"
            />
            <Link to="/top-up" className="text-blue">
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
export default TopUp;
