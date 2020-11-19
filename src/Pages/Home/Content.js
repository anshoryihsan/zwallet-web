const Nav = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthLogout());
    history.replace("/login");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm nav-bar nav-mobile-l">
        <div class=" container d-flex justify-content-between align-items-center ">
          <a class="h4 font-weight-bold txt-blue" href="./home.html">
            Zwallet
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="justify-content-end collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav d-lg-flex flex-lg-row align-items-center">
              {/* <!-- profile --> */}
              <div class="d-flex align-items-center">
                <img
                  class="mobile-l"
                  src="/assets/img/user-photo.svg"
                  alt="user"
                  height="50px"
                  width="50px"
                />
              </div>
              <div class="d-flex flex-column align-items-center mx-3">
                <span class="p-0 font-weight-bold small">Robert Chandler</span>
                <span class="p-0 small text-black-50">+62 813-9387-7946</span>
              </div>
              <div class="d-flex align-items-center">
                <img
                  class="mobile-l bel"
                  src="/assets/img/icon/bell-icon.svg"
                  alt="notif"
                  height=""
                />
              </div>
              {/* <!-- end profile --> */}
              <div class="">
                <ul class="">
                  <li class="d-flex align-items-center my-4 active">
                    <img
                      alt="dashboard"
                      src="/assets/img/icon/dashboard-icon-active.svg"
                      height="24px"
                      width="24px"
                    />
                    <a href="./home.html" class="txt-blue">
                      <h6 class="ml-2 mb-0">Dashboard</h6>
                    </a>
                  </li>
                  <li class="d-flex align-items-center my-4">
                    <img
                      alt="transfer"
                      src="/assets/img/icon/arrow-up.svg"
                      height="24px"
                      width="24px"
                    />
                    <a href="/transfer/transfer.html" class="text-dark">
                      <h6 class="ml-2 mb-0">Transfer</h6>
                    </a>
                  </li>
                  <li class="d-flex align-items-center my-4">
                    <img
                      alt="plus"
                      src="/assets/img/icon/plus.svg"
                      height="24px"
                      width="24px"
                    />
                    <a href="/top-up/top-up.html" class="text-dark">
                      <h6 class="ml-2 mb-0">Top Up</h6>
                    </a>
                  </li>
                  <li class="d-flex align-items-center my-4">
                    <img
                      alt="profile"
                      src="/assets/img/icon/user.svg"
                      height="24px"
                      width="24px"
                    />
                    <a href="/profile/status.html" class="text-dark">
                      <h6 class="ml-2 mb-0">Profile</h6>
                    </a>
                  </li>
                </ul>
                <ul class="">
                  <li class="d-flex align-items-center">
                    <img
                      alt="logout"
                      src="/assets/img/icon/log-out.svg"
                      height="24px"
                      width="24px"
                    />
                    <a onClick={() => onLogout()} class="text-dark">
                      <h6 class="ml-2 mb-0">Keluar</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
