export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
  
};
export default reducer;
