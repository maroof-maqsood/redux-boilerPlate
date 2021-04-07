import reducer  from "../store/reducer/Reducer";
import { createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk'

const store = createStore  (reducer , applyMiddleware(thunk));

export default store;