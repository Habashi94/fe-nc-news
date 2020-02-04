import React, { Component } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";

import ArticleCards from "./ArticleCards";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  getArticles = () => {
    api.fetchArticles().then(results => {
      this.setState({ articles: results, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading)
      return (
        <div>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      );
    return (
      <div>
        {" "}
        <ul>
          {articles.map(article => {
            return <ArticleCards article={article}></ArticleCards>;
          })}
        </ul>
      </div>
    );
  }
}
