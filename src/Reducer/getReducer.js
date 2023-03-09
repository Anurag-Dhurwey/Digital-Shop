export const getReducer=(state,action)=>{

switch (action.type) {
    case 'getAllProducts':
        return{
           ...state,
           products:[...action.payload]
        };
      case 'error':
        return{
            ...state,
            isError:true
        }

    default:
        return state;
}

} 