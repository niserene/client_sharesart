const ACTIONS = {
    LOGIN : 'LOGIN',
    LOGIN_LOADING : 'LOGIN_LOADING',
    LOGING_FAILED : 'LOGIN_FAILED',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',

    SIGNUP : 'SIGNUP',
    SIGNUP_LOADING : 'SIGNUP_LOADING',
    SIGNUP_FAILED : 'SIGNUP_FAILED',
    SIGNUP_SUCCESS : 'SIGNUP_SUCCESS',

    GET_USER : 'GET_USER',

    GET_TOKEN : 'GET_TOKEN',
    SET_TOKEN : 'SET_TOKEN',

    SET_USERINFO:'SET_USERINFO',

    LOGOUT_USER:'LOGOUT_USER',
    INITIAL_AUTH_SETUP:'INITIAL_AUTH_SETUP',

    CONTACTUS_DONE : 'CONTACTUS_DONE',
    NEWSLETTER_DONE : 'NEWSLETTER_DONE',

    SHOW_TOAST : 'SHOW_TOAST',
    HIDE_TOAST : 'HIDE_TOAST',

    RESET_LOADING:'RESET_LOADING',
    RESET_ERROR:'RESET_ERROR',
    RESET_SUCCESS:'RESET_SUCCESS',

    FORGOT_LOADING:'FORGOT_LOADING',
    FORGOT_ERROR:'FORGOT_ERROR',
    FORGOT_SUCCESS:'FORGOT_SUCCESS',

    ALLUSERS_LOADING:'ALLUSERS_LOADING',
    ALLUSERS_SUCCESS:'ALLUSERS_SUCCESS',
    ALLUSERS_ERROR:'ALLUSERS_ERROR',

    SET_NEWSLETTER_LIST:'SET_NEWSLETTER_LIST',
    SET_CONTACTS_LIST:'SET_CONTACTS_LIST'
}

export default ACTIONS;