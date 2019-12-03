import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UrlForm from '../components/form/UrlForm';
import { createUrl } from '../actions/urlActions';
import { urlSelector } from '../selectors/urlSelectors';

const UrlShort = () => {

  const dispatch = useDispatch();
  const shortUrl = useSelector(urlSelector);

  const handleSubmit = (event, url) => {
    event.preventDefault();
    dispatch(createUrl(url));
  };

  return (
    <>
      <UrlForm handleSubmit={handleSubmit} />
      <p>{shortUrl}</p>
    </>
  );
};

export default UrlShort;