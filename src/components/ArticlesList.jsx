import React, { Component } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import SortBy from "./SortBy";
import ArticleCards from "./ArticleCards";
import OrderBy from "./OrderBy";
import style from "../CSS/card.module.css";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc"
  };

  getArticles = topic => {
    const { sort_by, order } = this.state;
    api.fetchArticles(topic, sort_by, order).then(results => {
      this.setState({ articles: results, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  handlingOrder = (text, key) => {
    this.setState({ [key]: text });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.getArticles();
    }
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
        <SortBy handlingOrder={this.handlingOrder}></SortBy>
        <OrderBy handlingOrder={this.handlingOrder}></OrderBy>{" "}
        <ul className={style.card}>
          {articles.map(article => {
            return (
              <ArticleCards
                article={article}
                key={article.article_id}
              ></ArticleCards>
            );
          })}
        </ul>
      </div>
    );
  }
}
