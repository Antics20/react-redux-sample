import { ADD_ARTICLE, ADD_ALL_ARTICLE } from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.payload
            ];
        case 'ADD_ALL_ARTICLE':
            return action.payload;
        default:
            return state
    }
}

export default articles;