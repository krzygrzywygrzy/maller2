import { useEffect, useState } from "react";
import algolia_products from "../algolia";

const useAlgoliaPhraseSearch = (query) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const get = async () => {
      try {
        setLoading(true);
        var res = await algolia_products.search(query, {
          attributesToRetrieve: ["name", "price", "image"],
        });
        setData(res.hits);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [query]);

  return { data, loading, error };
};

export default useAlgoliaPhraseSearch;
