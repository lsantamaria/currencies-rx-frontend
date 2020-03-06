import {CurrencyActionType, FETCH_CURRENCIES_ACTION, FETCH_CURRENCIES_ERROR,
    FETCH_CURRENCIES_SUCCESS} from "./actions";
import {Dispatch} from 'redux';

const fetchCurrenciesAction:CurrencyActionType = {
    type: FETCH_CURRENCIES_ACTION,
    payload: {}
};

const fetchCurrenciesSuccess:CurrencyActionType = {
    type: FETCH_CURRENCIES_SUCCESS,
    payload: []
};

const fetchCurrenciesError:CurrencyActionType = {
    type: FETCH_CURRENCIES_ERROR,
    payload: {}
};

export const fetchCurrencies = () => {
    return (dispatch:Dispatch) => {
        dispatch(fetchCurrenciesAction);
        dispatch(fetchCurrenciesSuccess);
    }
};
