import {LOGIN, LOGOUT} from "../actions/LoginActions";


const initialState = {
  loggedIn: false
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, loggedIn: true};
        case LOGOUT:
            return {...state, loggedIn: false};
        default:
            return state;
    }
};

export default LoginReducer;
