import { Action } from "../action";
import { ActionType } from "../action";

const initialState = 1000000;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUP:
            return 0;
        default:
            return state;
    }
}

export default reducer;