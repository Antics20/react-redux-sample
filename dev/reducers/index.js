import { combineReducers } from 'redux';
import addArticle from './addArticle';
import updateArticle from './updateArticle';

const defaultState={
  addArticle: []
};

const rootReducer=combineReducers  ({
  addArticle
});

export default rootReducer;
