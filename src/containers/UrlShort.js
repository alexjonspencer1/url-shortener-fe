import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UrlForm from '../components/form/UrlForm';
import { createUrl } from '../actions/urlActions';
import { urlSelector } from '../selectors/urlSelectors';

const UrlShort = () => {

  const [copied, setCopied] = useState('');
  const urlRef = useRef(null);

  const dispatch = useDispatch();
  const shortUrl = useSelector(urlSelector);

  const handleSubmit = (event, url) => {
    event.preventDefault();
    dispatch(createUrl(url));
  };

  const handleCopy = () => {
    urlRef.current.select();
    document.execCommand('copy');
    setCopied('Copied!');
  };

  return (
    <>
      <UrlForm handleSubmit={handleSubmit} />
      <textarea ref={urlRef} value={shortUrl}>{shortUrl}</textarea><button onClick={handleCopy}>Copy Short Url</button>
      <p>{copied}</p>
    </>
  );
};

export default UrlShort;