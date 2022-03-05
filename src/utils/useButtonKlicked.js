import { useEffect } from "react";

const useButtonClicked = (key, callback) => {
  useEffect(() => {
    const handle = (event) => {
      if (event.key === key) callback();
    };

    document.addEventListener("keypress", handle);
    return () => {
      document.removeEventListener("keypress", handle);
    };
  }, [key, callback]);
};

export default useButtonClicked;
