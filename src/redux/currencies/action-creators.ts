import {
    CurrencyActionType, FETCH_CURRENCIES_ACTION, FETCH_CURRENCIES_ERROR,
    FETCH_CURRENCIES_SUCCESS
} from "./actions";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../root-reducer";
import {Action} from "redux";
import {Constants} from "../../constants";
import {Currency} from "../../currencies/types";

const fetchCurrenciesAction: CurrencyActionType = {
    type: FETCH_CURRENCIES_ACTION,
    payload: {}
};

const fetchCurrenciesSuccess = (payload: Array<Currency>):CurrencyActionType => {
    return {
        type: FETCH_CURRENCIES_SUCCESS,
        payload: payload
    };
}

const fetchCurrenciesError: CurrencyActionType = {
    type: FETCH_CURRENCIES_ERROR,
    payload: {}
};

export const fetchCurrencies = (): ThunkAction<void, RootState, null, Action<string>> => {
    return dispatch => {
        dispatch(fetchCurrenciesAction);
        exampleAPI()
            .then((response:Response) =>
                    response.json().then(data =>
                        dispatch(fetchCurrenciesSuccess(data))
                    ))
    };
};


function exampleAPI() {
    return fetch(Constants.GET_CURRENCIES_URL);
}
