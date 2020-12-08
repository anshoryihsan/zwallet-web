import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./status.css";
import { IMAGE_URL } from "../../Helper/Environment";

import { AuthLogout } from "../../redux/actions/Auth";
import { UploadPhoto } from "../../redux/actions/User";
import { Header, Footer } from "../../Components";

function Profile() {
  const { register, handleSubmit } = useForm();
  const [photo, setPhoto] = useState("");
  const { token } = useSelector((state) => state.Auth);
  const { userdata } = useSelector((state) => state.User);

  const history = useHistory();
  const dispatch = useDispatch();

  const changePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const insertPhoto = (data) => {
    const formData = new FormData();
    // formData.append("photo", {
    //   uri: response.uri,
    //   name: response.fileName,
    //   type: response.type,
    // });

    formData.append("photo", data.image);
    console.log(formData, "photo");
    // console.log(data.image[0], "photo");
    // formData.append(
    //   "photo",
    //   photo
    // );
    //   const data={image:formData}
    //   console.log(data);
    //   console.log(e.image[0],'photo');
    //   console.log(formData,'formdata');
    // dispatch(UploadPhoto(token, data.image[0]));
  };
  //   const onSubmit = () => {
  //     dispatch(InsertUserPhoto(token, photo));
  //   };

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
            data={userdata}
            onLogout={onLogout}
            history={history}
            token={token}
          />
        </section>
      </main>
      <Footer />
      <Modal
        register={register}
        handleSubmit={handleSubmit}
        insertPhoto={insertPhoto}
        changePhoto={changePhoto}
      />
    </div>
  );
}

const Content = (props) => {
  const { data, token } = props;
  const dispatch = useDispatch();
  const _setPhoto = (e) => {
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    dispatch(UploadPhoto(token, formData));
  };
  return (
    <section className="col-lg-10 col-sm-12 px-4">
      <main className="row">
        <aside className="col-lg-12 col-12 pt-3 pt-lg-0 bg-color-white shadow-sm">
          <article className="justify-content-center p-3">
            <div
              action="./confirm.html"
              className="mt-5 d-flex flex-column align-items-center"
            >
              <img
                src={
                  !data.photo
                    ? "/assets/img/icon/user.svg"
                    : IMAGE_URL + data.photo
                }
                height="70px"
                width="70px"
                alt="img"
              />
              <label
                className="font-weight-bold mt-3 mb-2"
                style={{ cursor: "pointer" }}
                // data-toggle="modal"
                // data-target="#myModal"
              >
                <img src="/assets/img/icon/edit-icon.svg" />
                <span className="p-0 small text-black-50">edit</span>
                <input
                  type="file"
                  className="d-none"
                  onChange={_setPhoto}
                  accept="image/*"
                />
              </label>
              <div className="font-weight-bold">
                {!data.first_name ? " " : data.first_name}
                {/* {!Profile.data ? " " : Profile.data[0].last_name} */}
              </div>
              <div className="font-weight-bold small txt-grey mt-1 mb-5">
                <span className="p-0 small text-black-50">
                  {!data.phone ? " " : data.phone}
                </span>
              </div>
            </div>
            <div className="mt-2 d-flex flex-column align-items-center">
              <Link
                to="/profile/personal-info"
                className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
              >
                <span
                  className="p-3 font-weight-bold txt-dark"
                  onClick={() =>
                    props.history.push({
                      pathname: "/profile/profile-info",
                      token: token,
                      data: data,
                    })
                  }
                >
                  Personal Information
                </span>
                <div className="ml-4 pl-4 flex-row justify-content-end small">
                  <img
                    alt="logout"
                    src="/assets/img/icon/arrow-left.svg"
                    height="24px"
                    width="24px"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-2 d-flex flex-column align-items-center ">
              <Link
                to="/profile/change-password"
                className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
              >
                <span className="p-3 font-weight-bold txt-dark">
                  Change Password
                </span>
                <div className="ml-4 pl-4 flex-row justify-content-end small">
                  <img
                    alt="logout"
                    src="/assets/img/icon/arrow-left.svg"
                    height="24px"
                    width="24px"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-2 d-flex flex-column align-items-center ">
              <Link
                to="/profile/change-pin"
                className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm"
              >
                <span className="p-3 font-weight-bold txt-dark">
                  Change PIN
                </span>
                <div className="ml-4 pl-4 flex-row justify-content-end small">
                  <img
                    alt="logout"
                    src="/assets/img/icon/arrow-left.svg"
                    height="24px"
                    width="24px"
                  />
                </div>
              </Link>
            </div>
            <div className="mt-2 d-flex flex-column align-items-center ">
              <div className="col-lg-6 d-flex align-items-center justify-content-between mx-4 bradius px-3 bg-color-grey shadow-sm">
                <span
                  onClick={() => props.onLogout()}
                  className="p-3 font-weight-bold"
                >
                  Logout
                </span>
              </div>
            </div>
          </article>
        </aside>
      </main>
    </section>
  );
};

const Modal = (props) => {
  // console.log(props,'modal');
  //   const { register, handleSubmit } = useForm();
  //   const dispatch = useDispatch();
  //   const Profile = useSelector((s) => s.Profile);
  //   const Auth = useSelector((s) => s.Auth);
  //   const onSubmit = (data) => {
  //     console.log(data.image, "IMAGGGEEEEEEEEEEEE");
  // login(data);
  // dispatch(
  //   uploadPhoto({
  //     image: data.image[0].name,
  //     token: Auth.data,
  //   })
  // );
  //   };

  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Your Photo</h5>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body d-flex align-items-center justify-content-between">
            {/* <input type="file" name="image"  onChange={props.changePhoto} accept="image" />
                <input
                  type="button"
                  className="btn btn-modal"
                  value="Upload Photo"
                  onClick={props.insertPhoto}
                /> */}
            <form
              onSubmit={props.handleSubmit(props.insertPhoto)}
              encType="multipart/form-data"
            >
              <input
                type="file"
                name="image"
                ref={props.register}
                accept="image/*"
              />
              <div className="d-flex align-items-center  mt-5 shadow-sm">
                <input
                  type="submit"
                  className="btn btn-modal"
                  value="Upload Photo"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  );
}
export default Profile;
