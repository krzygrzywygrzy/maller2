import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
