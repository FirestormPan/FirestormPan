export const favouriteReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_FAVOURITE':
            return[...state, ]
        case 'REMOVE_FAVOURITE':
             return state.filter(book=> book.id !== action.id) 
        default:
            return state             
    }
}