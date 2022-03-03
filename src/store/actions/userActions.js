import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "load_user" });
      const snapshot = await getDoc(doc(db, "users", uid));
      if (!snapshot.exists) throw Error("User does not exist!");
      dispatch({ type: "loaded_user", payload: snapshot.data() });
    } catch (err) {
      dispatch({ type: "error_user", payload: err.message });
    }
  };
};
