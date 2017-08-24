import { ADD_ARTICLE, GET_ALL_ARTICLES, UPDATE_ARTICLE, INCREMENT_LIKES } from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [
                ...state,
                action.payload
            ];
        case GET_ALL_ARTICLES:
            return action.payload;
        case UPDATE_ARTICLE:
            return state.map(article => {
                if (article.id === action.payload.id) {
                    return action.payload;
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
        default:
            return state
    }
}

export default articles;