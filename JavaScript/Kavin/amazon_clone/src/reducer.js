const getLocalStoreData = JSON.parse(localStorage.getItem("basketItems")) || [];

export const initialState = {
  basket: getLocalStoreData,
  user: null,
};

export const gettotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...state.basket, action.item])
      );
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        localStorage.setItem(
          "basketItems",
          JSON.stringify(newBasket)
        );
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export default reducer;
