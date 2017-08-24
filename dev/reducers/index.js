import { combineReducers } from 'redux';
import articles from './articleReducer';
import articleToUpdateId from './articleToUpdate';

const mainReducer = combineReducers({
  articles,
  articleToUpdateId
});

export default mainReducer;
