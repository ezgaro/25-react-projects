import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  // 3 states
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, (options = {}));
      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(`${error.message}. Some error occured :(`);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return {data, error, pending};
}
