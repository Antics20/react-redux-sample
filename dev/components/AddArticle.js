import React, { Component } from 'react';
import { addArticle } from '../actions/actionCreators';

class AddArticle extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value });
    };

    render() {
        const isEnabled =
            this.state.title.length > 0 &&
            this.state.description.length > 0;

        return(
            <form>
                <h3>Add Article</h3>
                <div className="form-group">
                    <label for="textTitle">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <label for="textDescription">Description</label>
                    <textarea
                        className="form-control"
                        rows="10" id="textDescription"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}>
                    </textarea>
                </div>
                <a onClick={ () => {
                    this.props.addArticle({title: this.state.title, description: this.state.description});
                    this.state.title = '';
                    this.state.description = '';
                }}
                   disabled={!isEnabled}
                   className="btn btn-success">Save
                </a>
            </form>
        );
    }
}

export default AddArticle;