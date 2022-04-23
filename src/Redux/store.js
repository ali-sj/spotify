import { createStore,applyMiddleware } from "redux"
import { reducer } from "./combineReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initialState={}

const middlware=[thunk]

export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))

