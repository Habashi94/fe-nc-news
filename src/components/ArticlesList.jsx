import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
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
    if (isLoading) return <p>Loading....</p>;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id}>
                {
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
