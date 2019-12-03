import { CREATE_URL } from '../actions/urlActions';

export default function reducer(state = '', action) {
  switch(action.type) {
    case CREATE_URL:
      return action.payload;
    default:
      return state;
  }
}