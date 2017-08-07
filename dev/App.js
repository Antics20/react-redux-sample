import React, { Component } from 'react';
import Header from './components/Header';
import AddArticle from './components/AddArticle';
import UpdateArticle from './components/UpdateArticle';
import ArticlesList from './Components/ArticlesList';
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
            <ArticlesList />
          </div>
        </div>
      </div>
    )
  }
}
