import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";
import ErrorPage from "./ErrorPage";

export default class ArticlesbyTopic extends Component {
  state = {
    articles: [],
    // sort_by: "created_at",
    // order: "desc"
    err: null
  };
  getArticles = () => {
    // const { sort_by, order } = this.state;
    const { topic } = this.props;

    api
      .fetchArticles(topic)
      .then(results => {
        this.setState({ articles: results });
      })
      .catch(err => this.setState({ err }));
  };
  componentDidMount() {
    this.getArticles();
  }
  render() {
    const { articles, err } = this.state;
    if (err) {
      return <ErrorPage err={err}></ErrorPage>;
    }
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <ol key={article.article_id}>
                <ArticleCards article={article}></ArticleCards>
              </ol>
            );
          })}
        </ul>
      </div>
    );
  }
}
