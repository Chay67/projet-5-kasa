import { useState, useEffect } from "react";

export default function useLocalData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      // Si déjà en localStorage -> on charge directement
      setData(JSON.parse(storedData));
      setLoading(false);
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
          setData(json);
          localStorage.setItem("data", JSON.stringify(json));
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { data, loading, error };
}