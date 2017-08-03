import React, { Component } from 'react';

class UpdateArticle extends Component {
  render() {
    return(
      <form>
        <h3>Update Article</h3>
        <div className="form-group">
          <label for="textTitle">Title</label>
          <input type="text" className="form-control" id="textTitle" />
          <label for="textDescription">Description</label>
          <textarea className="form-control" rows="10" id="textDescription"></textarea>
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    );
  }
}

export default UpdateArticle;
