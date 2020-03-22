import {combineReducers, createStore} from "redux";
import LoginReducer from "../reducers/LoginReducer";

const rootReducer = combineReducers({
   loginReducer: LoginReducer
});

export const configureStore = () => createStore(rootReducer);
