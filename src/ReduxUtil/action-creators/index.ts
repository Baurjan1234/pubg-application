

import { Dispatch } from 'redux';
import { Action, DepositAction, LoginType } from '../action'
import { ActionType } from '../action';

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    };
}
export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    };
}
export const bankrupMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUP,
        })
    };
}
