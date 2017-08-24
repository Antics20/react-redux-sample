import React, { Component } from 'react';

class Article extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.description}</p>
                <span className="buttons-line">
                    <a onClick={() => {
                            this.props.articleToUpdate(this.props.article.id)
                        }}
                       className="btn btn-info">
                        Update
                    </a>
                    <a onClick={() => {
                        this.props.deleteArticle(this.props.article)
                    }} className="btn btn-danger">Delete</a>
                    <i onClick={() => {
                        this.props.likeArticle(this.props.article)
                    }}
                       className="fa fa-thumbs-o-up fa-2x" aria-hidden="true">
                    </i>{this.props.article.likes}
                </span>
            </div>
        );
    }
}

export default Article;