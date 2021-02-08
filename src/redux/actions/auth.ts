import { IAuthenticatedInfo } from '../../types/interfaces';
import { auth } from '../../api/api';
import { InferActionTypes } from '../store';
import { ThunkAction } from 'redux-thunk';
import { TAppState } from '../reducers/index';
import { openNotificationWithIcon } from '../../helpers/notification';
import axios from '../../helpers/axios';

type ThunkActionType = ThunkAction<Promise<void>, TAppState, unknown, actionTypes>;

export enum types {
    LOGIN_STARTED = "LOGIN_STARTED",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED",
    REGISTER_STARTED = "REGISTER_STARTED",
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FAILED = "REGISTER_FAILED",
    REGISTER_DATA_RESET = "REGISTER_DATA_RESET",
    LOGOUT_USER = "LOGOUT_USER"
};

export type actionTypes = InferActionTypes<typeof actionCreators>;

export const actionCreators = {
    loginStarted: () => ({
        type: types.LOGIN_STARTED
    } as const),

    loginSuccess: (authInfo: IAuthenticatedInfo) => ({
        type: types.LOGIN_SUCCESS,
        authInfo: authInfo
    } as const),

    loginFailed: (error: any) => ({
        type: types.LOGIN_FAILED,
        error: error
    } as const),

    registerStarted: () => ({
        type: types.REGISTER_STARTED
    } as const),

    registerSuccess: () => ({
        type: types.REGISTER_SUCCESS,
    } as const),

    registerFailed: (error: any) => ({
        type: types.REGISTER_FAILED,
        error: error
    } as const),
    registerDataReset: () => ({
        type: types.REGISTER_DATA_RESET
    } as const),
    logoutUser: () => ({
        type: types.LOGOUT_USER
    } as const)
}

const saveUserInfo = (authInfo: IAuthenticatedInfo) => {
    localStorage.setItem('authInfo', JSON.stringify(authInfo));
};

const addTokenToRequest = (token: string) => {
    axios.defaults.headers['token'] = 'Bearer ' + token;
}

const getUserInfo = () => {
    return localStorage.getItem('authInfo') ? JSON.parse(localStorage.getItem('authInfo')!) : null;
};


export const login = (
    email: string,
    password: string,
    setFieldError: (field: string, message: string | undefined) => void,
): ThunkActionType => async (dispatch) => {
    dispatch(actionCreators.loginStarted());
    try {
        const loginInfo = await auth.login(email, password);
        dispatch(actionCreators.loginSuccess(loginInfo));
        saveUserInfo(loginInfo);
        addTokenToRequest(loginInfo.token!);
        openNotificationWithIcon('success', 'Успех', 'Добро пожаловать');
    } catch (e) {
        dispatch(actionCreators.loginFailed(e));
        openNotificationWithIcon('error', 'Ошибка', 'Текст ошибки ' + JSON.stringify(e.response.data));
        Object.keys(e.response.data.error).forEach((key) => {
            setFieldError(key, e.response.data.error[key]);
        })
    }
}

export const register = (
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    setFieldError: (field: string, message: string | undefined) => void,
): ThunkActionType => async (dispatch) => {
    dispatch(actionCreators.registerStarted());
    try {
        await auth.register(email, first_name, last_name, password);
        dispatch(actionCreators.registerSuccess());
        openNotificationWithIcon('success', 'Успех', 'Вы успешно зарегистрировались!');
    } catch (e) {
        dispatch(actionCreators.registerFailed(e.response.data));
        Object.keys(e.response.data).forEach((key) => {
            setFieldError(key, e.response.data[key]);
        });
        openNotificationWithIcon('error', 'Ошибка', 'Не удалось зарегистрировать пользователя ' + JSON.stringify(e.response.data));
    }
}


export const initUser = (): ThunkActionType => async (dispatch) => {
    const userInfo = getUserInfo();
    if (userInfo) {
        dispatch(actionCreators.loginSuccess(userInfo));
        addTokenToRequest(userInfo.token);
    }
}

export const logoutUser = (): ThunkActionType => async (dispatch) => {
    localStorage.removeItem('authInfo');
    dispatch(actionCreators.logoutUser());
}