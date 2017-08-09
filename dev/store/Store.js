import { createStore } from 'redux';
import rootReducer from './reducers/index';
import actionCreators from './actions/actionCreators';
///import addArticle from './data/addArticle';


const store =createStore(rootReducer,defaultState);


export default store;
