import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dati, setDati] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data from this resource");
        }
        return res.json();
      })
      .then((dati) => {
        setDati(dati);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err);
        console.log(err.message);
      });
  }, [url]);
  return { dati, isPending, error };
};

export default useFetch;
