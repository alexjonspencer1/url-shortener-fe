import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UrlForm = ({ handleSubmit }) => {

  const [url, setUrl] = useState('');

  return (
    <div>
      <form onSubmit={event => handleSubmit(event, url)}>
        <p>URL: <input type='text' value={url} onChange={({ target }) => setUrl(target.value)}></input></p>
        <button>Convert to shortened Url</button>
      </form>
    </div>
  );
};

UrlForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default UrlForm;