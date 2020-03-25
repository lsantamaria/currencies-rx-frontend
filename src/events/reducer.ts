import {EventActionType, CREATE_EVENT_ACTION, CREATE_EVENT_ERROR, CREATE_EVENT_SUCCESS} from "./actions";
import {EventState} from "./eventState";

const initialState:EventState = {
    error: ""
};

export const eventReducer = (state:EventState = initialState, action:EventActionType):EventState => {
    switch(action.type){
        case CREATE_EVENT_ACTION:
            return {...state};
        case CREATE_EVENT_SUCCESS:
            return {...state};
        case CREATE_EVENT_ERROR:
            return {...state, error: "Error creating event"};
        default:{
            return {...state}
        }
    }
};
