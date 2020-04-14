import rootReducer from "./root-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';
const middlewares = [logger, thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = configureStore({
    reducer: rootReducer,
    middleware:[],
    enhancers:[middlewareEnhancer]
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./root-reducer', () => {
        const newRootReducer = require('./root-reducer').default;
        store.replaceReducer(newRootReducer)
    })
}

export type AppDispatch = typeof store.dispatch

export default store;
