import {currencyReducer} from "../currencies/reducer";
import {combineReducers} from "@reduxjs/toolkit";
import {eventReducer} from "../events/reducer";

const rootReducer = combineReducers({
    currencyState: currencyReducer,
    eventState: eventReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
