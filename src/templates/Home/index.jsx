import { useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
        console.log(pageData);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
