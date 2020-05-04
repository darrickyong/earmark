import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

const receiveSessionErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
}

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS
})

export const fetchUsers = () => dispatch => SessionApiUtil.fetchUsers()
  .then( users => dispatch(receiveUsers(users)));

export const signup = user => dispatch => SessionApiUtil.signup(user)
  .then( user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
  .then( user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)))};

export const logout = () => dispatch => SessionApiUtil.logout()
  .then( user => dispatch(logoutCurrentUser()));

