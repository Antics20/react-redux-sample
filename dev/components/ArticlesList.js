import React, { Component } from 'react';

class ArticlesList extends Component {
    render() {
        return(
            <div>
                <div>
                    <h3>Articol 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn btn-info" type="submit">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
                <div>
                    <h3>Articol 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <button className="btn btn-info" type="submit">Update</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    }
}

export default ArticlesList;

