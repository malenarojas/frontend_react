import { useEffect, useState } from 'react';
import { getallagents } from '../api/agentApi.js';

export const useFetchAgentes = () => {
  const [agentes, setAgentes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getallagents()
      .then((res) =>{
      console.log('📦 FULL RESPONSE AGENTES:', res);
      console.log('📦 res.data:', res.data);
      setAgentes(res.data);
    })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { agentes, loading };
};