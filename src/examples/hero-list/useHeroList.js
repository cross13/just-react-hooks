import { useEffect, useState } from 'react';
import axios from 'axios';

const HEROES_API_ALL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

export const useHerosList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(HEROES_API_ALL)
        .then(({data}) => {
            setList(data);
        })
        .finally(() => setLoading(false));
  }, []);

  return {
    list, loading
  }
};