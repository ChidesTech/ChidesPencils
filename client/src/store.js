import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { drawingDeleteReducer, drawingListReducer, drawingSaveReducer} from "./reducers/drawingReducers";
import thunk from "redux-thunk";
import { userLoginReducer, userUpdateReducer } from "./reducers/userReducers";
import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userLogin: {userInfo}};
const reducer = combineReducers({
    drawingList : drawingListReducer,
    userLogin: userLoginReducer,
    drawingSave : drawingSaveReducer,
    drawingDelete: drawingDeleteReducer,
    userUpdate: userUpdateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;