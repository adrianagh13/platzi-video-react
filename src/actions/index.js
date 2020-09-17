//export de la action con return explícito de un objeto

export const setFavorite = payload => ({
    type: 'SET_FAVORITE', //type: indica la acción a ejecutar
    payload, //payload es la información que mandamos al reducer
});

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload, 
})