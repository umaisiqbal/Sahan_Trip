import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../../actions/ActionTypes';

const initialState = {
  status: '',
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        status: 'FAILED',
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
