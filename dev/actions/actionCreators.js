export const ADD_ARTICLE = 'ADD_ARTICLE';

//add Article
export function addArticle(title, description) {
    return {
        type: 'ADD_ARTICLE',
        title,
        description
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