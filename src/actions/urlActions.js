import { postUrl } from '../services/url';

export const CREATE_URL = 'CREATE_URL';

export const createUrl = (url) => dispatch => {

  postUrl(url)
    .then(url =>
      dispatch({
        type: CREATE_URL,
        payload: url.shortUrl
      }));
};