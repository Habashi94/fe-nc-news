import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";

export default class ArticlesbyTopic extends Component {
  state = {
    articles: []
    // sort_by: "created_at",
    // order: "desc"
  };
  getArticles = () => {
    // const { sort_by, order } = this.state;
    const { topic } = this.props;

    api.fetchArticles(topic).then(results => {
      this.setState({ articles: results });
    });
  };
  componentDidMount() {
    this.getArticles();
  }
  render() {
    const { articles } = this.state;
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
