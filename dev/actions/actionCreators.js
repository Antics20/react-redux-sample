import fetch from 'isomorphic-fetch';
import ArticlesApi from '../api/ArticlesApi';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const ADD_ALL_ARTICLE = 'ADD_ALL_ARTICLE';

//add Article
export function addArticle(article) {
    return function (dispatch) {
        return ArticlesApi.postArticle(article).then( response => {
            dispatch({
                type: ADD_ARTICLE,
                payload: response
            });
        });
    }
}

export function fetchAllArticles() {
    return function(dispatch) {
        return ArticlesApi.getAllArticles().then( response => {
            dispatch({
                type: ADD_ALL_ARTICLE,
                payload: response
            });
        }).catch(error => {
            throw(error);
        });
    }
}

//update Article
export function updateArticle(id, title, description) {
    return {
        type: 'UPDATE_ARTICLE',
        id,
        title,
        description
    }
}