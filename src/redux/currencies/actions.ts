import {Currency} from "../../currencies/types";

export const FETCH_CURRENCIES_ACTION = "FETCH_CURRENCIES";
export const FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS";
export const FETCH_CURRENCIES_ERROR = "FETCH_CURRENCIES_ERROR";

interface FetchCurrenciesAction {
    type: typeof FETCH_CURRENCIES_ACTION
    payload: Object
}

interface FetchCurrenciesActionSuccess {
    type: typeof FETCH_CURRENCIES_SUCCESS
    payload: Array<Currency>
}

interface FetchCurrenciesActionError {
    type: typeof FETCH_CURRENCIES_ERROR
    payload: Object
}

export type CurrencyActionType = FetchCurrenciesAction | FetchCurrenciesActionSuccess | FetchCurrenciesActionError;
