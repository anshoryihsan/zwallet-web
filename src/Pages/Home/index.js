import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./home.css";
import { AuthLogout } from "../../redux/actions/Auth";
import { Header, Footer, Nav } from "../../Components";
import { SOCKET_URL, IMAGE_URL } from "../../Helper/Environment";
import ioClient from "socket.io-client";

import { UserData, UserTransactionHistory } from "../../redux/actions/User.js";

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.Auth);
  const { userdata } = useSelector((state) => state.User);
  const { userdatahistory } = useSelector((state) => state.User);
  const { id } = userdata;
  // const [balance_, setBalance_] = useState(() || 0);

  useEffect(() => {
    dispatch(UserTransactionHistory(token));
    dispatch(UserData(token));
  }, [dispatch, token]);
  // console.log(userdata, 'user data home');

  const socket = ioClient(SOCKET_URL, {
    query: { id },
    transports: ["websocket"],
    // transports: ["websocket", "polling", "flashsocket"], //cors
  });
  useEffect(() => {
    if (socket == null) return;
    socket.on("info_balance", (data) => {
      const { balance } = data[0];
      // setBalance_(balance);
      // dispatch(UserData(token));
    });
    return () => {
      // socket.close();
      socket.off("info_balance");
    };
  }, [socket]);

  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };

  return (
    <div>
      <Header data={userdata} />
      <main className="container my-4">
        <section className="row">
          <Nav />
          <section className="col-lg-10 col-sm-12 px-4">
            <main className="row">
              <Content
                data={userdata}
                userdata={userdata}
                onLogout={onLogout}
              />
              <Chart />
              <TransactonHistory
                userdata={userdata}
                userdatahistory={userdatahistory}
              />
            </main>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const Content = (props) => {
  const { data } = props;
  const { balance, phone } = data;

  return (
    <>
      {/* <section className="col-lg-10 col-sm-12 px-4">
        <main className="row"> */}
      <header className="col-lg-12 bg-blue shadow-sm mb-2 header-content">
        <div className="my-3 d-md-flex justify-content-between align-items-center">
          <section className="">
            <span className="txt-white">Balance</span>
            <div className="h3 txt-white font-weight-bold my-3">
              Rp {!balance ? "0" : balance}
            </div>
            <span className="txt-white small">{!phone ? "-" : phone}</span>
          </section>
          <section className="d-lg-flex flex-column">
            <Link to="/transfer">
              <button className="btn btn-bg-lg py-1 mb-md-3 text-white d-flex align-items-center">
                <img
                  src="/assets/img/icon/arrow-up_.svg"
                  height="24px"
                  width="24px"
                />
                <div className="font-weight-bold">Transfer</div>
              </button>
            </Link>
            <Link to="/top-up">
              <button className="btn btn-bg-lg py-1 mb-md-3 px-3 text-white d-flex align-items-center">
                <img
                  src="/assets/img/icon/plus-white.svg"
                  height="24px"
                  width="24px"
                />
                <div className="font-weight-bold">Top Up</div>
              </button>
            </Link>
          </section>
        </div>
      </header>
    </>
  );
};

const Chart = () => {
  return <aside className="col-lg-8 bg-color-white shadow-sm">Ichart</aside>;
};

const TransactonHistory = (props) => {
  const { userdata, userdatahistory } = props;

  return (
    <aside className="col-lg-4 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
      <article className="  ">
        <div className="d-flex justify-content-between align-items-center">
          <div className=" bd-highlight trh-p">
            <span className="font-weight-bold small">Transaction History</span>
          </div>
          <div className="">
            <Link to="#" className="small txt-blue">
              Seel all
            </Link>
          </div>
        </div>
        {userdatahistory.length !== 0 ? (
          userdatahistory.map((item) => {
            return (
              <div className="d-flex align-items-center justify-content-between py-3">
                <div className="d-flex align-items-center">
                  {item.from_ === userdata.first_name ? (
                    <img
                      src={
                        !item.photo
                          ? "/assets/img/icon/user.svg"
                          : IMAGE_URL + item.photo
                      }
                      height="50px"
                      width="50px"
                      alt="img"
                    />
                  ) : item.to_ === userdata.first_name ? (
                    <img
                      src={
                        !item.photo
                          ? "/assets/img/icon/user.svg"
                          : IMAGE_URL + item.from_photo
                      }
                      height="50px"
                      width="50px"
                      alt="img"
                    />
                  ) : (
                    <img
                      src="/assets/img/icon/user.svg"
                      height="50px"
                      width="50px"
                      alt="img"
                    />
                  )}

                  <div className="ml-2 pl-2 flex-row">
                    {item.from_ === userdata.first_name ? (
                      <span className="p-1 font-weight-bold small">
                        {item.to_}
                      </span>
                    ) : item.to_ === userdata.first_name ? (
                      <span className="p-1 font-weight-bold small">
                        {item.from_}
                      </span>
                    ) : (
                      <span className="p-1 font-weight-bold small"></span>
                    )}

                    {item.profile_id !== userdata.id ? (
                      <span className="p-1 small">Transfer</span>
                    ) : (
                      <span className="p-1 small">Subsription</span>
                    )}
                  </div>
                </div>
                {item.profile_id !== userdata.id ? (
                  <span className="text-success small">+ Rp{item.amount}</span>
                ) : (
                  <span className="txt-red small">- Rp{item.amount}</span>
                )}
              </div>
            );
          })
        ) : (
          <div className="d-flex align-items-center justify-content-between py-3">
            <span className="small">history empty</span>
          </div>
        )}
      </article>
    </aside>
  );
};
export default Home;
