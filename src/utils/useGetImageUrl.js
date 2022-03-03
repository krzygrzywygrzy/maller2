import { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";

const useGetImageUrl = (image) => {
  const [data, setData] = useState();

  useEffect(() => {
    const get = async () => {
      try {
        const res = await getDownloadURL(ref(storage, image));
        setData(res);
      } catch {}
    };
    get();
  }, []);

  return data;
};
export default useGetImageUrl;
