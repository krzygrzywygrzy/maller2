export const addToCart = (toAdd) => {
  return (dispatch, getState) => {
    let cart = getState().cart;

    let found;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === toAdd.id) {
        found = i;
        break;
      }
    }

    if (found !== undefined) {
      cart[found].amount += toAdd.amount;
      dispatch({ type: "cart_set", payload: cart });
    } else {
      dispatch({ type: "cart_set", payload: [...cart, toAdd] });
    }
  };
};

export const clearCart = () => {
  return (dispatch) => dispatch({ type: "cart_set", payload: [] });
};

export const changeAmount = (index, newAmount) => {
  return (dispatch, getState) => {
    let cart = getState().cart;
    cart[index].amount = newAmount;
    dispatch({ type: "cart_set", payload: cart });
  };
};

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: "cart_set",
      payload: getState().cart.filter((el) => el.id !== id),
    });
  };
};
