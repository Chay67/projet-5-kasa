import { useState, useEffect } from "react";

export default function useLocalData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      // Si déjà en localStorage -> on charge directement
      // setTimeout(() => {
        setData(JSON.parse(storedData));
        setLoading(false);
      // }, 3000);
    } else {
      // Sinon -> on récupère via fetch
      fetch("/src/data/data.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Erreur réseau");
          }
          return res.json();
        })
        .then((json) => {
          // setTimeout(() => {
            setData(json);
            localStorage.setItem("data", JSON.stringify(json));
          // }, 3000);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          // setTimeout(() => {
            setLoading(false);
          // }, 3000);
          // setLoading(false);
        });
    }
  }, []);

  return { data, loading, error };
}