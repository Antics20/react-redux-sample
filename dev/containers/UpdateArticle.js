import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import UpdateArticle from '../components/UpdateArticle';

function findArticleById(id, articles) {
    let article = articles.find((article) => article.id == id);
    return Object.assign({}, article);
}

function mapStateToProps(state) {
    return {
        article: findArticleById(state.articleToUpdateId, state.articles),
        articleToUpdateId: state.articleToUpdateId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const UpdateArticleContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateArticle);

export default UpdateArticleContainer;
