

const reducer = (state, action) => {
    switch (action.type){
        default:
            return state;
        case 'SET_FAVORITE':
            return {
                ...state, //destructuración de state
                myList: [...state.myList, action.payload] //indicamos que el objeto myList destructurado del state, será igual al payload de la action
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload) //filter recorre un array y devuelve un nuevo arreglo con los elementos que cumplan con la condición, 
                //es por eso que si hay una igualdad entre el elemento del action y del state, se exlcluirá del state y por ende se borrará del myList
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload, //el obj user de nuestro state recibe como data el payload que se le pasó mediante la action
            }
        case 'LOGOUT_REQUEST' :
                return {
                    ...state,
                    user: action.payload,
                }
        case 'GET_VIDEO_SOURCE' :
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) || //find recorre un array y devuelve el primer rrsultado que cumpla con la condicion igualada
                state.originals.find(item => item.id === Number(action.payload)) ||
                []
            }
    }

}

export default reducer;