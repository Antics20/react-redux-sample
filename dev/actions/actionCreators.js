import fetch from 'isomorphic-fetch';
import ArticlesApi from '../api/ArticlesApi';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const Get_Article='Get_Article';

//add Article
export function addArticle(article) {
    return function (dispatch) {
        return ArticlesApi.postArticle(article).then( response => {
            dispatch({
                type: 'ADD_ARTICLE',
                payload: response
            });
        });
    }
}
export function getArticle(article) {
    return function (dispatch) {
        return ArticlesApi.getArticle(article).then( response => {
            dispatch({
                type: 'Get_Article',
                payload: response
            });
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
