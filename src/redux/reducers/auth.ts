import { types } from '../actions/auth';
import { actionTypes } from '../actions/auth';
import { IAuthenticatedInfo, } from '../../types/interfaces';


type TInitialState = {
    authenticatedInfo: IAuthenticatedInfo,
    errors: string | null,
    isLoading: boolean,
    isRegistered: boolean,
    isAuthorized: boolean
}

const initialState: TInitialState = {
    authenticatedInfo: {
        email: null,
        first_name: null,
        last_name: null,
        token: null
    },
    errors: null,
    isLoading: false,
    isRegistered: false,
    isAuthorized: false
};


const authReducer = (state = initialState, actions: actionTypes): TInitialState => {
    switch (actions.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                isLoading: true,
                errors: null,
                isAuthorized: false
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authenticatedInfo: actions.authInfo,
                isLoading: false,
                errors: null,
                isAuthorized: true
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errors: actions.error,
                isAuthorized: false
            };
        case types.REGISTER_STARTED:
            return {
                ...state,
                isLoading: true,
                errors: null,
                isRegistered: false,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errors: null,
                isRegistered: true
            };
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoading: false,
                errors: actions.error,
                isRegistered: false
            };
        case types.REGISTER_DATA_RESET:
            return {
                ...state,
                isRegistered: false
            };
        case types.LOGOUT_USER:
            return {
                ...state,
                isAuthorized: false,
                isRegistered: false,
                errors: null,
                authenticatedInfo: {
                    email: null,
                    last_name: null,
                    first_name: null,
                    token: null
                }
            }
        default:
            return state;
    }
}

export default authReducer;