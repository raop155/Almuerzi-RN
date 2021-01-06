import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return { loading, data };
};

export default useFetch;
