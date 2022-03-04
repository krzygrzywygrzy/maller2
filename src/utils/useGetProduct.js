import { useState, useEffect } from "react";
import algolia_products from "../algolia";

const useGetProduct = (id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const get = async () => {
      try {
        // eslint-disable-next-line
        var res = await algolia_products.findObject(
          (hit) => hit.objectID == id
        );
        setData(res.object);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [id]);

  return { data, loading, error };
};
export default useGetProduct;
