import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (mounted) {
          setData(data);
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { loading, data };
};

export default useFetch;
