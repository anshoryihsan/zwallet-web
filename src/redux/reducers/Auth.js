const initialState = {
  // data: [],
  // loading: false,
  token: '',
  role: '',
  error: '',
};

const Auth = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    // case 'LOGIN_REQUEST':
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case 'AUTH_SUCCESS':
      const {token, role} = payload;
      return {
        ...state,
        token,
        role,
        error: undefined,
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        error: payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: payload,
        role: payload,
        error: payload,
      };
    // case 'SIGNUP_REQUEST':
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case 'SIGNUP_SUCCESS':
    //   return {
    //     ...state,
    //     loading: false,
    //     isLogin: false,
    //     data: action.payload.data,
    //   };
    // case 'SIGNUP_ERROR':
    //   return {
    //     ...state,
    //     loading: false,
    //     isLogin: false,
    //     data: [],
    //     error: action.payload,
    //   };
    // case 'REQUEST':
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case 'SUCCESS':
    //   return {
    //     ...state,
    //     loading: false,
    //     isLogin: true,
    //     data: action.payload.data,
    //   };
    // case 'ERROR':
    //   return {
    //     ...state,
    //     loading: false,
    //     isLogin: false,
    //     data: [],
    //     error: action.payload,
    //   };
    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     loading: false,
    //     isLogin: false,
    //     data: [],
    //     _persist: {
    //       rehydrated: true,
    //       version: -1,
    //     },
    //   };
    default:
      return state;
  }
};
export default Auth;
