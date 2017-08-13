import ADD_ARTICLE from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default articles;