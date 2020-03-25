export const CREATE_EVENT_ACTION = "CREATE_EVENT";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_ERROR = "CREATE_EVENT_ERROR";

interface CreateEventAction {
    type: typeof CREATE_EVENT_ACTION
    payload: {}
}

interface CreateEventActionSuccess {
    type: typeof CREATE_EVENT_SUCCESS
    payload: {}
}

interface CreateEventActionError {
    type: typeof CREATE_EVENT_ERROR
    payload: string
}

export type EventActionType = CreateEventAction | CreateEventActionSuccess | CreateEventActionError;
