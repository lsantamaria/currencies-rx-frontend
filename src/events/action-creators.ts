import {
    EventActionType, CREATE_EVENT_ACTION, CREATE_EVENT_ERROR,
    CREATE_EVENT_SUCCESS
} from "./actions"
import {ThunkAction} from "redux-thunk";
import {RootState} from "../redux/root-reducer";
import {Action} from "redux";
import {Constants} from "../common/constants";
import {CurrencyEvent} from "./types";
import {isErrorResponse} from "../common/httpUtils";

const createEventAction: EventActionType = {
    type: CREATE_EVENT_ACTION,
    payload: {}
};

const createEventSuccess = (): EventActionType => {
    return {
        type: CREATE_EVENT_SUCCESS,
        payload: {}
    };
};

const createEventError = (payload: string): EventActionType => {
    return {
        type: CREATE_EVENT_ERROR,
        payload: payload
    };
};

export const createEvent = (event:CurrencyEvent): ThunkAction<void, RootState, null, Action<string>> => {
    return dispatch => {
        dispatch(createEventAction);
        fetch(Constants.CREATE_EVENT_URL, {
            method: 'post',
            body: JSON.stringify(event),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response: Response) => {
                        if (isErrorResponse(response)) {
                            dispatch(createEventError("Error creating event"))
                        } else {
                            dispatch(createEventSuccess())
                        }
                }
            )
            .catch(error => {
                dispatch(createEventError(error));
            })
    };
};
