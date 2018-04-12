import { combineReducers } from 'redux';
import counter from './counter';
// import otherReducer from "./otherReducer";

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    counter,
    // otherReducer: otherReducer
  });
}
