import React, { Component } from 'react';
import Header from './components/Header';
import AddArticle from './components/AddArticle';
import UpdateArticle from './components/UpdateArticle';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <AddArticle />
            <UpdateArticle />
          </div>
          <div className="col-md-8">
            <div>
              <h3>Articol 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                 aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                 dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                 officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-default" type="submit">Update</button>
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
        </div>
      </div>
    )
  }
}
