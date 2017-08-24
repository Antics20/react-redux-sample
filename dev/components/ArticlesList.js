import React, { Component } from 'react';
import Article from './Article';

class ArticlesList extends Component {
    render() {
        return(
            <div>
                {
                    this.props.articles.map((article) =>
                        <Article article={article}
                                 key={article.id}
                                 articleToUpdate={this.props.articleToUpdate}
                                 likeArticle={this.props.likeArticle}
                        />)
                }
            </div>
        );
    }
}

export default ArticlesList;