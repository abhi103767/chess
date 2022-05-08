// create store here

import { combineReducers, legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer.js";


const rootReducer = combineReducers(
  {
  ...reducer
  }
)

const store = createStore(reducer);

// console.log(store.dispatch());







export {store}
// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
