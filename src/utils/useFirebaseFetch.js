import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";

const useFirebaseFetch = (query) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(query);
        const items = [];
        snapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    get();
    // eslint-disable-next-line
  }, []);

  return { data, loading, error };
};

export default useFirebaseFetch;
