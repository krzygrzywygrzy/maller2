const initState = {
  loading: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "load_user":
      return { loading: true };
    case "loaded_user":
      return { loading: false, data: action.payload };
    case "error_user":
      return { loading: false, error: action.payload };
    case "logout_user":
      return { ...initState };
    default:
      return state;
  }
};

export default userReducer;
