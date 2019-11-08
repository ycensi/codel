export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (data, token) => {
  return dispatch => dispatch({ type: LOGIN, data, token });
};

export const logout = () => {
  return dispatch => dispatch({ type: LOGOUT });
};