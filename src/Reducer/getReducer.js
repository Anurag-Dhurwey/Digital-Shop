export const getReducer = (state, action) => {
  switch (action.type) {
    case "getAllProducts":
      const featuredProducts = action.payload?.filter((item, i) => {
        return item.attributes.isfeatured === true;
      });
      return {
        ...state,
        featuredProducts: featuredProducts,
        products: [...action.payload],
      };

     case "get_A_product":
      console.log(action.payload+' '+1)
      return {
        ...state,
        aProduct:{...action.payload}
      } 
    case "error":
      return {
        ...state,
        isError: true,
      };
    case "getOneError":
      return {
        ...state,
        getOneError: true,
      };

    default:
      return state;
  }
};
