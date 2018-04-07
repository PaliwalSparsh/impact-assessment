import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import getRootReducer from "./reducers";

export default function getStore(navReducer, middleware) {
    const store:Object = createStore(
        getRootReducer(navReducer),
        applyMiddleware(middleware)
    );
    return store;
}
