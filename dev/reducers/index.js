import { combineReducers } from 'redux';
import articles from './addArticle';

const mainReducer = combineReducers({
  articles
});

export default mainReducer;
