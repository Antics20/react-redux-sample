import { combineReducers } from 'redux';
import articles from './addArticle';

const defaultState={
  addArticle: []
};

const addReducer = combineReducers({
  articles
});

export default addReducer;
