export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (email, password) => {
    return {
        type: LOGIN,
        data: {}
    }
};

export const logout = () => {
    return {
        type: LOGOUT,
        data: {}
    }
};
