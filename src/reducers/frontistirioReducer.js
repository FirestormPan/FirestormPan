export const frontistirioReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_frontistirio':
            return[...state, ]
        case 'REMOVE_frontistirio':
             return state.filter(book=> book.id !== action.id) 
        default:
            return state             
    }
}