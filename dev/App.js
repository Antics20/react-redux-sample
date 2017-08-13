import React, { Component } from 'react';
import Header from './components/Header';
import UpdateArticle from './components/UpdateArticle';
import ArticlesList from './components/ArticlesList';
import AddNewArticle from './containers/AddArticle';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <AddNewArticle />
            <UpdateArticle />
          </div>
          <div className="col-md-8">
            <ArticlesList />
          </div>
        </div>
      </div>
    )
  }
}