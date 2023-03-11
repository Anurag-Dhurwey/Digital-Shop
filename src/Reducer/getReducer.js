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

      
    case "error":
      return {
        ...state,
        isError: true,
      };

    default:
      return state;
  }
};
