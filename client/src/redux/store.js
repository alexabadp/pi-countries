import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnharcer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnharcer(applyMiddleware(thunkMiddleware))
);

export default store;

// Redux no puede realizar operaciones asyncronas por si solas. (Están cargadas de incertidumbre)

// thunkMiddleware, el único que permite hacer las request
