import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import "./transfer.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthLogout } from "../../redux/actions/Auth";
import { Header, Footer } from "../../Components";

import { GetAllUserData } from "../../redux/actions/User";

function Transfer() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setMore] = useState(true);
  const [page, setPage] = useState(0);
  const [isScrolling, setScrolling] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  //   let location = useLocation();
  const { userdata } = useSelector((state) => state.User);
  const { token } = useSelector((state) => state.Auth);
  const { getalluserdata } = useSelector((state) => state.User);

  console.log(getalluserdata);

  useEffect(() => {
    setLoading(true);
    dispatch(GetAllUserData(token, name, page));
    setLoading(false);
  }, [dispatch, token, name, page]);
  //   console.log(userdata, 'transfer');
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  const loadMore = () => {
    if (isScrolling) return false;
    setScrolling(true);
    setPage(page + 1);
    setTimeout(() => {
      dispatch(GetAllUserData(token, name, page, false));
      setScrolling(false);
      if (getalluserdata.length < (page - 0) * 4) return setMore(false);
    }, 1500);
  };
  const changeName = (e) => {
    setName(e.target.value);
    setPage(0);
    setMore(true);
  };
  // console.log(name, 'name');
  return (
    <div>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav onLogout={onLogout} />
          <Content
            data={getalluserdata}
            onChange={changeName}
            value={name}
            hasMore={hasMore}
            loading={loading}
            loadMore={loadMore}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Content(props) {
  const { data, onChange, value, hasMore, loading, loadMore } = props;
  // console.log(props, 'props');
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="font-weight-bold small">Search Receiver</span>
            </div>

            <div className="input-txt my-2">
              <label className="d-flex w-100 align-items-center">
                <input
                  placeholder="Search receiver here"
                  type="text"
                  className="inputtxt"
                  onChange={onChange}
                  value={value}
                />
              </label>
            </div>
            {loading ? (
              <div className="small text-center py-3">loading. . .</div>
            ) : (
              <InfiniteScroll
                initialLoad={false}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={
                  <div className="small text-center py-3" key={0}>
                    Loading ...
                  </div>
                }
              >
                {data.map((item) => {
                  return (
                    <div className="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3">
                      <div className="d-flex align-items-center">
                        <img src={item.photo} height="56px" width="56px" />
                        <div className="pl-3">
                          <a
                            href="./amountbank.html"
                            className="font-weight-bold text-dark"
                          >
                            {item.first_name}
                          </a>
                          <div className="small">{item.phone}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </InfiniteScroll>
            )}
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
export default Transfer;
