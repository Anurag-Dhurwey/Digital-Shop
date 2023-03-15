export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { product, qty } = action.payload;
      let cartItems;
      if (!state.cartItems.length) {
        const res= {
          ...state,
          cartItems: [...state.cartItems, { ...product, itemQty: qty,itemsPrice:product.attributes.price*qty }],
          totalQty: state.totalQty + qty,
          totalPrice:state.totalPrice+product.attributes.price*qty
        };
        return res

      } else {
        const ifExist = state.cartItems.filter((item) => {
          return item.id === product.id;
        });
        if (ifExist.length) {
          cartItems = state.cartItems.map((item) => {
            if (item.id === product.id) {
              return {
                ...item,
                itemQty: item.itemQty + qty,
                itemsPrice:item.itemsPrice+item.attributes.price*qty
              };
            } else {
              return {
                ...item,
              };
            }
          });
        } else {
          cartItems = [...state.cartItems, { ...product, itemQty: qty,itemsPrice:product.attributes.price*qty }];
        }
      }
      return {
        ...state,
        cartItems: [...cartItems],
        totalQty: state.totalQty + qty,
        totalPrice:state.totalPrice+product.attributes.price*qty
      };

    default:
      return state;
  }
};
