import { combineReducers, legacy_createStore } from "redux";
import { languageReducer } from "./languageReducer.js";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  languageReducer
});

export const store = legacy_createStore(rootReducer, composeWithDevTools());