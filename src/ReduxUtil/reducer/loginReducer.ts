import { LgAction, LoginType } from "../action";


const initState = false;
const loginReducer = (state: boolean = initState, action: LgAction) => {
    switch (action.type) {
        case LoginType.LOGIN:
            return action.login
        default:
            return state;
    }
}
export default loginReducer;