
export enum LoginType {
    LOGINED = 'logined',
    LOGIN = 'login'
}

interface loginAction {
    type: LoginType.LOGIN,
    login: boolean
}

export type LgAction = loginAction;

export enum ActionType {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    BANKRUP = "bankrup"
}

export interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}
interface BankrupAction {
    type: ActionType.BANKRUP
}
export type Action = BankrupAction | WithdrawAction | DepositAction;
