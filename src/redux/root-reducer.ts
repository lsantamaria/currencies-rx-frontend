import {currencyReducer} from "./currencies/reducer";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    currencyState: currencyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
