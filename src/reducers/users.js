import { GET_USERS_LIST, GET_USER_DETAIL } from "../actions/userAction";

let initialState = {
  getUsersList: false,
  errorUserList: false,
  getUserDetail: false,
  errorUserDetail: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data.results,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data.results.url,
        errorUserDetail: action.payload.errorMessage,
      };

    // case POST_USER_CREATE:
    //   return {
    //     ...state,
    //     getResponDataUser: action.payload.data,
    //     errorResponDataUser: action.payload.errorMessage,
    //   };

    // case PUT_USER_EDIT:
    //   return {
    //     ...state,
    //     getResponDataUser: action.payload.data,
    //     errorResponDataUser: action.payload.errorMessage,
    //   };

    default:
      return state;
  }
};

export default users;
