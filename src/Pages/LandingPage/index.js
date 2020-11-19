import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AuthLogout} from '../../redux/actions/Auth';
const LandingPage = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(AuthLogout(history));
    // history.replace('/login');
  };
  return (
    <div>
      ini landing page
      <a onClick={() => onLogout()} className="text-dark">
        <h6 className="ml-2 mb-0">Logout</h6>
      </a>
    </div>
  );
};

export default LandingPage;
