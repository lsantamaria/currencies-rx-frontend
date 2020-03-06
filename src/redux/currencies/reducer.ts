import {CurrencyState} from "./currencyState";
import {CurrencyActionType, FETCH_CURRENCIES_ACTION, FETCH_CURRENCIES_ERROR, FETCH_CURRENCIES_SUCCESS} from "./actions";

const initialState:CurrencyState = {
    currencies: [],
    error: ""
};

export const currencyReducer = (state:CurrencyState = initialState, action:CurrencyActionType) => {
    switch(action.type){
        case FETCH_CURRENCIES_ACTION:
            return {...state};
        case FETCH_CURRENCIES_SUCCESS:
            return {...state, currencies: action.payload};
        case FETCH_CURRENCIES_ERROR:
            return {...state, error: "Error fetching currencies"};
    }
};

export default currencyReducer;
