import { useEffect, useState } from 'react';

import { Header } from '../../components/Header'
import { Cards } from '../../components/Cards';

export function Dashboard() {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'http://localhost:3333/offices'
      const res = await fetch(url);
      const data = await res.json();
      setOffices(data);
    }

    fetchApi();
  }, []);

  return (
    <>
      <Header />
      {
        offices?.map(item => <Cards data={item} /> )
      }
    </>
  )
}