export const getReducer=(state,action)=>{

switch (action.type) {
    case 'getAllProducts':
        return{
           ...state,
           products:[...action.payload]
        };
      

    default:
        return state;
}

} 