import { useEffect, useState } from 'react';
import { getallpropiedades } from '../api/propiedad.js';


export const useFetchPropiedades = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getallpropiedades()
      .then((res) => {
      console.log('📦 FULL RESPONSE Propiedades:', res);
      console.log('📦 res.data:', res.data);
      setPropiedades(res.data);
    })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { propiedades, loading };
};
