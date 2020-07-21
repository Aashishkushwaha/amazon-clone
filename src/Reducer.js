export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  console.log(basket);
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let { itemId } = action;
      let copiedBasket = [...state.basket];
      let updatedBasket = copiedBasket.filter((item) => item.id !== itemId);

      /*
        let index = copiedBasket.findIndex(item => item.id === itemId);
        if(index > -1) {
          copiedBasket.splice(index, 1);
        }
      */

      return { ...state, basket: updatedBasket };

    default:
      return state;
  }
};
