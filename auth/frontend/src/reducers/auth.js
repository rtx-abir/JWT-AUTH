import{ 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOAD_USER_SUCCESS, 
    LOAD_USER_FAIL,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL,
    LOGOUT
} from '../actions/types';


const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};


export default function reducer(state = initialState, action){
    const { type, payload } = action;

    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }
        case LOAD_USER_FAIL:
            return{
                ...state,
                user: null
            }
        case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        case AUTHENTICATION_SUCCESS:
            return{
                ...state,
                isAuthenticated: true
            }
        case AUTHENTICATION_FAIL:
            return{
                ...state,
                isAuthenticated: false
            }
        case LOGOUT:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
};