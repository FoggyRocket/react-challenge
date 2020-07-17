import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import banks from "./BanksDuck";

//combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
export const rootReducer = combineReducers({
    banks,
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creates a Redux store that holds the complete state tree of your app
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;