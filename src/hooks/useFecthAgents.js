import { useEffect, useState } from 'react';

export const useFetchAgentes = () => {
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAgentes()
      .then((res) => setAgentes(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { agentes, loading };
};