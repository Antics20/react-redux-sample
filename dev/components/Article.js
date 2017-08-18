import React, { Component } from 'react';

class Article extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.description}</p>
                <button className="btn btn-info" type="submit">Update</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        );
    }
}

export default Article;