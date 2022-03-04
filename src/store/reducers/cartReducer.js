const initState = [];

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "cart_set":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;
