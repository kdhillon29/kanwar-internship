import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  if (import.meta.env.MODE !== "development") {
    url = import.meta.env.VITE_API_URL + url.replace(/^\/api/, "");
  }
  useEffect(() => {
    let isMounted = true; // To prevent state updates on unmounted components

    const fetchData = async () => {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(() => resolve(), 500));
      try {
        const response = await axios.get(url);

        const { data } = response.data;
        if (isMounted) {
          setData(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup to avoid memory leaks
    };
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
