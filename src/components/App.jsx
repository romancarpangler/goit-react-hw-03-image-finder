import css from '../css.module.css';
import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { Searchbar } from './searchbar';
import { ImageGallery } from './imagelist';
import { api } from 'api';
import { Button } from './buttonpagination';

export const App = () => {
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [search, setSearch] = useState('');
  const [pageNumder, setPageNumder] = useState(1);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setloader(true);
      const Data = await api(search, pageNumder);
      setData(prevState => [...prevState, ...Data.hits]);
      setTotalHits(Data.totalHits);
      setloader(false);
    };

    if (search) {
      fetchImages();
    }
  }, [search, pageNumder]);

  const handleSubmit = value => {
    if (value === search) {
      return;
    }

    setSearch(value);
    setData([]);
    setPageNumder(1);
  };

  const clickButtonPagination = () => {
    setPageNumder(prevState => prevState + 1);
  };

  return (
    <div className={css.App}>
      <Searchbar submit={handleSubmit} />
      {loader && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      )}
      {data.length > 0 && <ImageGallery data={data} />}

      {totalHits > data.length && !loader && (
        <Button click={clickButtonPagination}></Button>
      )}
      {data.length === 0 && search && !loader && (
        <p>нічого не знайшли ідіть і не повертайтеся</p>
      )}
    </div>
  );
};
