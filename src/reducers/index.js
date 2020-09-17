

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
    }

}

export default reducer;