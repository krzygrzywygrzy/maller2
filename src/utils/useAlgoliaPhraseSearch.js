import { useEffect, useState } from "react";
import algolia_products from "../algolia";

const useAlgoliaPhraseSearch = (query, filters) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const get = async () => {
      try {
        if (query.length) {
          setLoading(true);
          var res = await algolia_products.search(query, {
            attributesToRetrieve: ["name", "price", "image"],
            filters: filters ?? undefined,
          });
          setData(res.hits);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, [query, filters]);

  return { data, loading, error };
};

export default useAlgoliaPhraseSearch;
