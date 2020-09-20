//export de la action con return explícito de un objeto
//cada que utilices un action debe recibir en sus parámetros el payload

export const setFavorite = payload => ({
    type: 'SET_FAVORITE', //type: indica la acción a ejecutar, para esta asginación siempre se usan mayúsculas
    payload, //payload es la información que mandamos al reducer
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload, 
});

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
})

