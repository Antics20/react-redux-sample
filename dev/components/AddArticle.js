import React, { Component } from 'react';
import { addArticle } from '../actions/actionCreators';

class AddArticle extends Component {
  render() {
      let title;
      let description;

    return(
      <form>
        <h3>Add Article</h3>
        <div className="form-group">
          <label for="textTitle">Title</label>
          <input type="text" className="form-control" id="textTitle" ref={node => { title = node}} />
          <label for="textDescription">Description</label>
          <textarea className="form-control" rows="10" id="textDescription" ref={node => { description = node}}></textarea>
        </div>
        <a onClick={ () => {
            this.props.addArticle({title: title.value, description: description.value});
            title.value = '';
            description.value = '';
        }} className="btn btn-success">Save</a>
      </form>
    );
  }
}

export default AddArticle;
