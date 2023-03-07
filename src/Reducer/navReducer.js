export const navReducer=(state,action)=>{
    switch (action.type) {
        case 'setCurrent':
            let newNav=state.map((currItm)=>{
                if(action.payload.name===currItm.name){
                return  {...currItm,current:true}
                }else{
                  return {...currItm,current:false}
                }   
             })
            return newNav;
            
            
    
        default:
            return state;
    }
}