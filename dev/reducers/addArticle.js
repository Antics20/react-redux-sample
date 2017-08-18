import { ADD_ARTICLE, GET_ALL_ARTICLES } from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.payload
            ];
        case 'GET_ALL_ARTICLES':
            return action.payload;
        default:
            return state
    }
}

export default articles;