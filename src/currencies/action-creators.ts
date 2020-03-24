import {
    CurrencyActionType, FETCH_CURRENCIES_ACTION, FETCH_CURRENCIES_ERROR,
    FETCH_CURRENCIES_SUCCESS
} from "./actions";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../redux/root-reducer";
import {Action} from "redux";
import {Constants} from "../constants";
import {Currency} from "./types";

const fetchCurrenciesAction: CurrencyActionType = {
    type: FETCH_CURRENCIES_ACTION,
    payload: {}
};

const fetchCurrenciesSuccess = (payload: Array<Currency>): CurrencyActionType => {
    return {
        type: FETCH_CURRENCIES_SUCCESS,
        payload: payload
    };
};

const fetchCurrenciesError = (payload: Object): CurrencyActionType => {
    return {
        type: FETCH_CURRENCIES_ERROR,
        payload: payload
    };
};

export const fetchCurrencies = (): ThunkAction<void, RootState, null, Action<string>> => {
    return dispatch => {
        dispatch(fetchCurrenciesAction);
        fetch(Constants.GET_CURRENCIES_URL)
            .then((response: Response) => {
                    response.json().then(data => {
                        if (response.status / 100 === 5 || response.status / 100 === 4) {
                            dispatch(fetchCurrenciesError(data))
                        } else {
                            dispatch(fetchCurrenciesSuccess(data))
                        }
                    })
                }
            )
            .catch(error => {
                dispatch(fetchCurrenciesError(error));
            })
    };
};
