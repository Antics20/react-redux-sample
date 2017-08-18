import ADD_ARTICLE from '../actions/actionCreators';
import Get_Article from '../actions/actionCreators';

const articles = (state = [], action) => {
    switch (action.type) {
      case 'Get_Article':
      return action.payload;
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
