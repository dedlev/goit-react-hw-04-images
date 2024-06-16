import { useEffect, useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Appstyled, LoaderWrapper } from './Appstyled';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getImages } from 'services/images.service';
import { RotatingLines } from 'react-loader-spinner';
import Notiflix from 'notiflix';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState('false');

  useEffect(() => {
    async function fetchData(query, page, perPage) {
      try {
        if (query === '') {
          return;
        }
        setIsLoading(true);
        const data = await getImages(query, page, perPage);
        if (data.hits.length === 0) {
          // this.setState({isError: `Query with name '${query}' not faund`})
          Notiflix.Notify.failure(`Query with name '${query}' not faund`);
        }
        setImages(prevImages =>
          page === 1 ? data.hits : [...prevImages, ...data.hits]
        );
        setTotalPages(data.total / perPage);
      } catch (error) {
        const errorFetching = error.message;
        setIsError(errorFetching);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(query, page, perPage);
  }, [page, perPage, query]);

  const handleSubmit = newQuery => {
    setQuery(newQuery.trim());
    setPage(1);
    setImages([]);
    setPerPage(perPage);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Appstyled>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <h1>{isError}</h1>}
      {isLoading && (
        <LoaderWrapper>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </LoaderWrapper>
      )}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && !isLoading && totalPages > page && (
        <Button onClick={handleLoadMore} />
      )}
      <GlobalStyle />
    </Appstyled>
  );
};
