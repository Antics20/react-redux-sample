import { ADD_ARTICLE, GET_ALL_ARTICLES, UPDATE_ARTICLE, INCREMENT_LIKES, DELETE_ARTICLE } from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [
                action.payload,
                ...state
            ];
        case GET_ALL_ARTICLES:
            return action.payload;
        case UPDATE_ARTICLE:
            return state.map(article => {
                if (article.id === action.payload.id) {
                    let updatedArticle = Object.assign({}, article, action.payload);
                    return updatedArticle;
                }
                return article;
            });
        case INCREMENT_LIKES:
            return state.map(article => {
                if (article.id === action.id) {
                    article.likes++;
                    return article;
                }
                return article;
            });
        case DELETE_ARTICLE:
            const newState = Object.assign([], state);
            const indexOfArticleToDelete = state.findIndex(article => { return article.id == action.payload.id });
            newState.splice(indexOfArticleToDelete, 1);
            return newState;
        default:
            return state
    }
}

export default articles;